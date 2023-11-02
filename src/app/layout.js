import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub User Search",
  description:
    "A web application to search for GitHub users and view their public information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/public/logo.png" />{" "}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
