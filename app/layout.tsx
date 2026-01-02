import "./globals.css"; // Ensure this import is here!

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children} {/* This will now show the Gateway selection first */}
      </body>
    </html>
  );
} 