import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import DisableContextMenu from "@/components/DisableContextMenu";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta AI (Recreated) 🚀",
  description:
    "Advanced Meta AI with faster responses, realtime weather updates, AI image generation and internet image search, realtime news fetch!🔥🦙",
  authors: [
    {
      name: "EJ",
      url: "https://github.com/ejjays",
    },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark select-none">
      <body className={`${jakarta.className} antialiased`}>
        <DisableContextMenu />
        {children}
      </body>
    </html>
  );
}