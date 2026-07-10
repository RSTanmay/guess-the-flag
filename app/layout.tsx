import "./globals.css";

export const metadata = {
  title: "Guess The Flag",
  description: "A geography quiz game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}