import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Breakdown Dashboard — Track AI Costs Per Feature",
  description: "Middleware and dashboard to track LLM API costs by feature, user, or endpoint. Real-time analytics for AI-powered startups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="15f53675-3031-4023-94ce-f19bdabbc200"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
