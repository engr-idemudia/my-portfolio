import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idemudia M. Osaghae | Software Engineer — Full-Stack & Backend",
  description:
    "Software Engineer based in Tallinn, Estonia, working across backend and full-stack development with a focus on fintech, application security, and clean, scalable architecture. Open to remote, onsite, and hybrid roles.",
  keywords: [
    "Full-Stack Developer",
    "Backend Engineer",
    "Full-Stack Developer",
    "Software Engineer Tallinn",
    "Fintech Developer",
    "Node.js Developer",
    "Java Spring Boot",
    "TypeScript",
    "Application Security",
    "REST API",
    "Estonia Software Engineer",
  ],
  metadataBase: new URL("https://www.idemudia.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Idemudia M. Osaghae | Software Engineer — Full-Stack & Backend",
    description:
      "Software Engineer working across backend and full-stack development. Fintech and application security focus. Based in Tallinn, Estonia.",
    url: "https://www.idemudia.dev",
    siteName: "Idemudia M. Osaghae Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Idemudia M. Osaghae — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idemudia M. Osaghae | Software Engineer — Full-Stack & Backend",
    description:
      "Software Engineer working across backend and full-stack development. Fintech and application security focus. Based in Tallinn, Estonia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/id-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
