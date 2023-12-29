import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../global.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambrosia | Server Management",
  description: "Server Management Made Simple.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={(font.className, "bg-white dark:bg-zinc-800")}>
        {children}
      </body>
    </html>
  );
};

export default AuthLayout;
