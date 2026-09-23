import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SAMBHAR | Modern Indian Dining",
    template: "%s | SAMBHAR Modern Indian Dining",
  },
  description:
    "Timeless Indian flavours, contemporary sensorial architecture, and a curated table designed for unforgettable twilight moments. New Delhi & Mayfair London.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        {/* Icon font used throughout the design */}
        {/* display=block keeps raw ligature names from flashing before the icon font loads */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="bg-white font-sans text-body-md text-on-surface">
        <Header />
        <main className="w-full min-h-screen bg-white pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
