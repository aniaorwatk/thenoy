import "./globals.css";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "The NoyArt",
  description: "The NoyArt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
