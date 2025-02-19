import './globals.css';

export const metadata = {
  title: 'Tattoo Generator',
  description: 'AI-powered tattoo design generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
