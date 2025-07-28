import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sectopia | Cybersecurity Simulation Dashboard",
  description:
    "Sectopia is a gamified cybersecurity platform simulating high-stakes scenarios like infrastructure attacks, reverse engineering, and real-world CTF challenges. Built for ethical hackers and red teamers.",
  keywords: [
    "sectopia",
    "cybersecurity",
    "ctf",
    "reverse engineering",
    "hacking dashboard",
    "red team",
    "penetration testing",
    "infrastructure simulation",
  ],
  authors: [
    {
      name: "Joseph Tadesse",
      url: "https://github.com/josepht273",
    },
  ],
  creator: "Sectopia Team",
  openGraph: {
    title: "Sectopia",
    description:
      "Gamified dashboard for cybersecurity challenges — simulate, hack, and learn.",
    url: "https://sectopia.dev",
    siteName: "Sectopia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sectopia Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning
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
