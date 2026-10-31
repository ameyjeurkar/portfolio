import "./globals.css";

export const metadata = {
  title: "Amey Jeurkar | Senior Frontend Engineer",
  description:
    "Amey Jeurkar is a senior frontend engineer building scalable, accessible web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Amey Jeurkar | Senior Frontend Engineer",
    description:
      "A portfolio of selected work, experience, and ideas from senior frontend engineer Amey Jeurkar.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
