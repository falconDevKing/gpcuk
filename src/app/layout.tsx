import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { churchIdentity, seo } from "@/constants";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  keywords: seo.keywords,
  ...(churchIdentity.siteUrl
    ? { metadataBase: new URL(churchIdentity.siteUrl) }
    : {}),
  ...(seo.socialImage.src
    ? {
        openGraph: {
          images: [
            {
              url: seo.socialImage.src,
              alt: seo.socialImage.alt,
            },
          ],
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
