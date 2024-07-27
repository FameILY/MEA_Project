import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const inter = Inter({ subsets: [ 'latin'] })

export const metadata = {
  title: 'Muncipal Engineer Association',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
