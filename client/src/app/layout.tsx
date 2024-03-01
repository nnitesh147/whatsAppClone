import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatHub",
  description: "Chat Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateProvider initialState={initialState} reducer={reducer}>
        <body className={inter.className}>{children}</body>
      </StateProvider>
    </html>
  );
}
