import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burgers",
  description: "O melhor hambúrguer da cidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" sizes="10x10" />
      </head>
      <body>{children}</body>
    </html>
  );
}
