import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voxel - Full-Stack Developer | Turning Ideas Into Digital Experiences',
  description: 'Freelance full-stack developer specializing in React, Node.js, and modern web applications. Building scalable digital solutions for businesses worldwide.',
  keywords: 'full-stack developer, React, Node.js, freelance, web development, JavaScript, TypeScript, MongoDB, Express',
  authors: [{ name: 'Voxel' }],
  creator: 'Voxel',
  openGraph: {
    title: 'Voxel - Full-Stack Developer',
    description: 'Freelance full-stack developer specializing in React, Node.js, and modern web applications.',
    url: 'https://voxel-portfolio.vercel.app',
    siteName: 'Voxel Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxel - Full-Stack Developer',
    description: 'Freelance full-stack developer specializing in React, Node.js, and modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
