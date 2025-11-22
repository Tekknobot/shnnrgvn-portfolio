import "./globals.css";

export const metadata = {
  title: "Shanna Ragavan – Frontend / Game Dev",
  description: "Frontend programmer focused on delightful, accessible experiences. Portfolio of Shanna Ragavan."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
