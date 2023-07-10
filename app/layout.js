import './globals.css'

import { Inter, Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'],
weight : [ '100', '200', '300', '400', '500', '600', '700', '800', '900']

})
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Luigy Leonardo',
  description: 'Desarrollador Web | Full-Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
