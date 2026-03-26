import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
