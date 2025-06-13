import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FashionDistrict Ghana - Your Premier Fashion Destination",
  description: "Discover the latest fashion trends, connect with top vendors, and elevate your style with FashionDistrict in East Legon, Accra, Ghana.", // Improved description
  keywords: [ // Added keywords
    "fashion",
    "Ghana",
    "Accra",
    "East Legon",
    "vendors",
    "clothing",
    "style",
    "online shopping",
    "marketplace",
    "African fashion",
    "men's fashion",
    "women's fashion",
    "accessories",
    "beauty",
  ],
  openGraph: { // Open Graph for social media
    title: "FashionDistrict Ghana",
    description: "Discover the best of fashion in Ghana.",
    url: "https://fashiondistrictghana.vercel.app/", 
    type: "website",
    images: [
      {
        url: "https://fashiondistrictghana.vercel.app/", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "FashionDistrict Ghana Logo",
      },
    ],
  },
  twitter: { // Twitter Card
    card: "summary_large_image",
    title: "FashionDistrict Ghana",
    description: "Discover the best of fashion in Ghana.",
    // Replace with your Twitter Card image
  },
  robots: "index, follow", // Control crawling and indexing
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}