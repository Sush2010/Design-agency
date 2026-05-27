import "./globals.css";

export const metadata = {
  title: "Design Agency",
  description: "Modern design agency website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}