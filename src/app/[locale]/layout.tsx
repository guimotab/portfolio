import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Guimotab's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale } 
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {  
  const messages = useMessages()
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}