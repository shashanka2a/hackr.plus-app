import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackr.plus — Hackathon Hub",
  description:
    "Host smarter, judge faster, hire better — all in one super app.",
  metadataBase: new URL("https://hackr.plus"),
  openGraph: {
    title: "Hackr.plus — Hackathon Hub",
    description:
      "Host smarter, judge faster, hire better — all in one super app.",
    url: "https://hackr.plus",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  icons: { 
    icon: "/favicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
