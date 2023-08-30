import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Palanquin_Dark } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Suspense } from 'react';
import Footer from '@/components/Footer';

const palanquinDark = Palanquin_Dark({
    weight: '400',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Valopedia',
    description:
        'Valopedia adalah website yang berisi informasi yang ada di game valorant, seperti agents,weapons dan maps.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={palanquinDark.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
