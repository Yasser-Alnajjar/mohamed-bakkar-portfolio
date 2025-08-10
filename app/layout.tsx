import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@components";

export const metadata: Metadata = {
  title: "Mahmod Bakkar Abdel WahaA - Mid-Level Graphic Designer",
  description:
    "Creative and detail-oriented Mid-Level Graphic Designer with 3 years of experience, specializing in brand identity, social media design, motion graphics, and print materials.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
