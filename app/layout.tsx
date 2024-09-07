import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import '/styles/globals.css'

export const metadata: Metadata = {
  title: "Portuno Next Radix",
  description: "Projeto de teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>
        <Theme accentColor="blue" panelBackground="solid" radius="small" appearance="dark">{children}</Theme>
      </body>
    </html>
  );
}
