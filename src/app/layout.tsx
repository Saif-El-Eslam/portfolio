import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saifeleslam Elsayed",
  description:
    "Hey there, welcome to my portfolio! Here, you'll get a sneak peek into the projects I've been buzzing with. From full-stack development to crafting user-friendly solutions, I've dived deep into creating seamless experiences with the latest tech. Take your time to explore and feel free to reach out if you've got any questions or fancy a collaboration. Cheers!",
  icons: {
    icon: "/logo/logo-color.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
