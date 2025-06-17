import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/provider';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Carentara',
  description:
    'Carentara',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={""}>
        <Providers>{children}</Providers>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
