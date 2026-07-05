import { Roboto, Space_Grotesk } from "next/font/google";

// next/font descarga y sirve las fuentes desde el propio deploy (sin CDNs en runtime).
export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display-var",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});
