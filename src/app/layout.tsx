import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "~/components/ui/sonner";
import QueryClientProviderContext from "./query-client-provider";
import { ThemeProvider } from "next-themes";

const main_font = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "boulder",
  description: "hi :)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${main_font.variable} font-main`}
      suppressHydrationWarning
    >
      <body className="overflow-hidden h-dvh w-dvw relative">
        <NuqsAdapter>
          <QueryClientProviderContext>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              {children}
            </ThemeProvider>
          </QueryClientProviderContext>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
