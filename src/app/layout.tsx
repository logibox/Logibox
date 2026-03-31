import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Root passes through; `[locale]/layout` renders `html`/`body`. */
export default function RootLayout({ children }: Props) {
  return children;
}
