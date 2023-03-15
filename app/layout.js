import "./globals.css";

export const metadata = {
  title: "Temida Exercise",
  description: "Recursive function example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
