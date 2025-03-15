import type { Metadata } from "next";
import "./globals.css";
import Footer from "@app/components/Footer";

export const metadata: Metadata = {
  title: "Frootify",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
