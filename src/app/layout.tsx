import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOSO Blog - Cập Nhật Tin Tức Mới Nhất",
  description:
    "Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
