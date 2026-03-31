import type { Metadata } from "next";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Favicon / PWA icons use the same brand asset as the header. */
export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/brand/logibox-logo.png", type: "image/png" }],
    apple: "/brand/logibox-logo.png",
    shortcut: "/brand/logibox-logo.png",
  },
};

/** Root passes through; `[locale]/layout` renders `html`/`body`. */
export default function RootLayout({ children }: Props) {
  return children;
}
