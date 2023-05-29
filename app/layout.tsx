import './globals.css';
import { Inter } from 'next/font/google';
import MyNavbar from './Components/MyNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adventure Coffee',
  description: 'Manage your personal experience with coffees around the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <MyNavbar />
        {children}
      </body>
    </html>
  );
}
