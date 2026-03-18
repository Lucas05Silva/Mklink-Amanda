import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amanda Ramos | Nail Designer',
  description: 'Alongamento em fibra de vidro e esmaltação em gel.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased text-[#3B2B2B] bg-[#F4EBE6]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
