import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-DM_Sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
