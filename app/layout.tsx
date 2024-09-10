import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme, Container } from "@radix-ui/themes";
import '/styles/globals.css'
import Navbar from "@/components/Navbar";

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
      <body style={{ margin: 0 }}>
        <Theme accentColor="indigo" panelBackground="solid" radius="small" appearance="dark">
        <Navbar />
          <Container mx="3">
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
