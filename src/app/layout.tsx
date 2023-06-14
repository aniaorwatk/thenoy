import "./globals.css";
import { Sen, Shadows_Into_Light_Two, Roboto } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: "400",
});

export const shadow = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
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
