import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idemudia M. Osaghae | Backend Software Engineer",
  description:
    "Backend Software Engineer based in Tallinn, Estonia, specialising in fintech systems, application security, and scalable REST APIs. Open to remote, onsite, and hybrid roles.",
  keywords: [
    "Backend Engineer",
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
    title: "Idemudia M. Osaghae | Backend Software Engineer",
    description:
      "Backend Software Engineer specialising in fintech, security, and scalable systems. Based in Tallinn, Estonia.",
    url: "https://www.idemudia.dev",
    siteName: "Idemudia M. Osaghae Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idemudia M. Osaghae | Backend Software Engineer",
    description:
      "Backend Software Engineer specialising in fintech, security, and scalable systems. Based in Tallinn, Estonia.",
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
