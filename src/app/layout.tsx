import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // Adjusted import
import { SignedIn } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SkillCheck",
  description: "Code skill assessment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConvexClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Auth-agnostic layout */}
            <div className="min-h-screen">
              <SignedIn>
                <Navbar />
              </SignedIn>
              <main className="px-4 sm:px-6 lg:px-8 pt-16">
                {children}
              </main>
            </div>
          </ThemeProvider>
          <Toaster />
        </ConvexClerkProvider>
      </body>
    </html>
  );
}