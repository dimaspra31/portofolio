import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Dimas Pratama - Portfolio",
  description: "Portfolio website Muhammad Dimas Pratama, a web developer specializing in modern web technologies and responsive design.",
  icons: {
    icon: "./images/logoBulat2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/logAsli.jpeg" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
