import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TLayoutProps } from "@/types/layoutPropsDefault";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<TLayoutProps>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={font.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
