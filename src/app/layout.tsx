import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";
import { ThemeProvider } from "next-themes";
import { MotionProvider } from "@/components/MotionProvider";

const bodyFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Afif Musyaffa — Portfolio",
  description:
    "Afif Musyaffa — IT student at Politeknik Caltex Riau building at the intersection of AI, networking, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
            <LocaleProvider>{children}</LocaleProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
