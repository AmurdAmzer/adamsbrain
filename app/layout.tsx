import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AdamsBrain",
  description: "Algebra 1 practice",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-page font-sans text-ink">
        <header className="border-b border-line">
          <div className="mx-auto max-w-[720px] px-4 py-4 text-lg font-bold">
            AdamsBrain
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}