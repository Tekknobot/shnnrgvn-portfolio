import React, { useEffect, useRef, useState } from "react";

/**
 * WeatherVisual (fixed)
 * - Uses Open-Meteo current_weather=true (stable fields: weathercode, windspeed)
 * - Maps WMO codes to: clear | clouds | rain | snow | windy
 * - Geolocation -> fallback
 * - Optional force condition for testing: <WeatherVisual force="rain" />
 */
export default function WeatherVisual({
  fallback = { lat: 40.7128, lon: -74.0060 }, // NYC
  height = 220,
  force // "clear" | "clouds" | "rain" | "snow" | "windy"
}) {
  const canvasRef = useRef(null);
  const [wx, setWx] = useState({ condition: "clear", wind: 0 });

  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    let cancelled = false;

    async function getLocation() {
      const pos = await new Promise((resolve) => {
        if (!("geolocation" in navigator)) return resolve(null);
        navigator.geolocation.getCurrentPosition(
          p => resolve({ lat: p.coords.latitude, lon: p.coords.longitude }),
          () => resolve(null),
          { enableHighAccuracy: false, timeout: 6000, maximumAge: 600000 }
        );
      });
      return pos || fallback;
    }

    function mapWMOToCondition(code, windspeed) {
      // See: https://open-meteo.com/en/docs (WMO weather codes)
      const windy = windspeed >= 20; // km/h
      if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
      if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code))
        return "rain";
      if ([2, 3, 45, 48].includes(code)) return windy ? "windy" : "clouds";
      if (windy) return "windy";
      // 0 = clear sky, 1 = mainly clear
      return [0, 1].includes(code) ? "clear" : "clouds";
    }

    async function getWeather({ lat, lon }) {
      // Use current_weather=true which returns { temperature, windspeed, weathercode, ... }
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(
        3
      )}&longitude=${lon.toFixed(
        3
      )}&current_weather=true&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();
      const cw = data.current_weather || {};
      const code = cw.weathercode ?? 0;
      const wind = cw.windspeed ?? 0;
      const condition = mapWMOToCondition(code, wind);
      return { condition, wind };
    }

    (async () => {
      try {
        const loc = await getLocation();
        if (cancelled) return;
        const w = await getWeather(loc);
        if (cancelled) return;
        setWx(force ? { condition: force, wind: w.wind } : w);
      } catch {
        if (!cancelled) setWx({ condition: force || "clear", wind: 0 });
      }
    })();

    return () => { cancelled = true; };
  }, [fallback.lat, fallback.lon, force]);

  // ---- Canvas animation (unchanged core, just uses wx.condition / wx.wind) ----
  useEffect(() => {
    if (prefersReduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let raf = 0;
    let particles = [];
    let W = canvas.clientWidth;
    let H = canvas.clientHeight;
    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function rand(a, b) { return a + Math.random() * (b - a); }

    function resize() {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    }

    function initParticles() {
      const countBase = Math.floor(Math.min(180, (W * H) / 4500));
      particles = [];

      if (wx.condition === "clear") {
        for (let i = 0; i < Math.max(30, countBase * 0.5); i++) {
          particles.push({
            kind: "star",
            x: rand(0, W),
            y: rand(0, H),
            r: rand(0.6, 1.8),
            a: rand(0.35, 0.8),
            s: rand(1.5, 3.5)
          });
        }
      } else if (wx.condition === "clouds") {
        for (let i = 0; i < Math.max(14, countBase * 0.12); i++) {
          particles.push({
            kind: "cloud",
            x: rand(0, W),
            y: rand(10, H - 10),
            w: rand(90, 200),
            h: rand(28, 58),
            vx: rand(0.08, 0.22),
            a: rand(0.12, 0.22)
          });
        }
      } else if (wx.condition === "rain") {
        const windPush = Math.min(0.35, wx.wind / 100);
        for (let i = 0; i < Math.max(160, countBase * 1.2); i++) {
          particles.push({
            kind: "drop",
            x: rand(0, W),
            y: rand(-H, H),
            vy: rand(2.2, 4.2),
            vx: windPush + rand(-0.05, 0.1),
            len: rand(8, 18),
            a: rand(0.35, 0.7)
          });
        }
      } else if (wx.condition === "snow") {
        const windPush = Math.min(0.25, wx.wind / 120);
        for (let i = 0; i < Math.max(120, countBase * 0.9); i++) {
          particles.push({
            kind: "flake",
            x: rand(0, W),
            y: rand(-H, H),
            vy: rand(0.4, 1.2),
            vx: windPush + Math.sin(rand(0, 6.28)) * 0.2,
            r: rand(1.2, 2.2),
            wobble: rand(0, 6.28)
          });
        }
      } else if (wx.condition === "windy") {
        for (let i = 0; i < Math.max(80, countBase * 0.6); i++) {
          particles.push({
            kind: "streak",
            x: rand(0, W),
            y: rand(0, H),
            vx: rand(1.2, 2.2) * (wx.wind / 20 + 0.5),
            len: rand(14, 28),
            a: rand(0.18, 0.35)
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      if (wx.condition === "clear") {
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "rgba(15,23,42,0)");
        g.addColorStop(1, "rgba(148,163,184,0.06)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      for (const p of particles) {
        if (p.kind === "star") {
          const tw = (Math.sin((performance.now() / 1000) * p.s + p.x) + 1) * 0.5;
          ctx.fillStyle = `rgba(226,232,240,${p.a * (0.6 + 0.4 * tw)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === "cloud") {
          ctx.fillStyle = `rgba(148,163,184,${p.a})`;
          ctx.beginPath();
          ctx.ellipse(p.x, p.y, p.w * 0.5, p.h * 0.5, 0, 0, Math.PI * 2);
          ctx.ellipse(p.x - p.w * 0.25, p.y + 3, p.w * 0.35, p.h * 0.42, 0, 0, Math.PI * 2);
          ctx.ellipse(p.x + p.w * 0.28, p.y + 4, p.w * 0.36, p.h * 0.44, 0, 0, Math.PI * 2);
          ctx.fill();
          p.x += p.vx;
          if (p.x - p.w > W + 20) p.x = -p.w;
        } else if (p.kind === "drop") {
          ctx.strokeStyle = `rgba(125,211,252,${p.a})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 3, p.y + p.len);
          ctx.stroke();
          p.y += p.vy * 3;
          p.x += p.vx * 3;
          if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
        } else if (p.kind === "flake") {
          ctx.fillStyle = "rgba(226,232,240,0.9)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          p.wobble += 0.02;
          p.x += p.vx + Math.sin(p.wobble) * 0.2;
          p.y += p.vy * 1.3;
          if (p.y > H + 6) { p.y = -10; p.x = Math.random() * W; }
        } else if (p.kind === "streak") {
          ctx.strokeStyle = `rgba(94,234,212,${p.a})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.len, p.y);
          ctx.stroke();
          p.x += p.vx;
          if (p.x > W + 20) { p.x = -p.len; p.y = Math.random() * H; }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function start() {
      resize();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(start);
    ro.observe(canvas);
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [wx.condition, wx.wind, prefersReduce]);

  return (
    <div className="relative mx-auto mb-8 w-full max-w-4xl" aria-hidden="true" style={{ pointerEvents: "none" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height }}
        className="rounded-2xl border border-slate-800 bg-transparent"
      />
    </div>
  );
}
