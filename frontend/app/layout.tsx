import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambrosia | Server Management",
  description: "Cool xD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(font.className, "bg-zinc-900")}>
        {children}
      </body>
    </html>
  );
}
