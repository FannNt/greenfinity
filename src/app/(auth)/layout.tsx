import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "../globals.css";

// font will be used
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans'
});

export const metadata: Metadata = {
    title: "Leafstyle",
    description: "Healthy Lifestyle Healthy Earth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${jakartaSans.className} antialiased`}
      >
        {children}
      </div>
  );
}
