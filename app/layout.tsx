import "@/app/ui/global.css";
import { inter, lusitana } from "@/app/ui/fonts.ts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
