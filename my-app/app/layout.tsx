
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "コミュ活サポートサイト",
  description: "コミュニティ活動をサポートするサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`font-sans font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
