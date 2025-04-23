import { type Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Lora } from 'next/font/google';
import './globals.css';

const lora = Lora({
  weight: ['600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'Agentory',
  description: 'Your Trusted App Store for AI Tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lora.variable} font-serif antialiased bg-white text-black`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
