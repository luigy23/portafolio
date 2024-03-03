import './globals.css'

import { Inter, Poppins, Lora } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'],
weight : [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
variable: "--font-poppins"

})
const lora = Lora({ subsets: ['latin'],
weight : [ '400', '500', '600', '700'],
variable: "--font-lora"

})



export const metadata = {
  title: 'Luigy Leonardo',
  description: 'Desarrollador Web | Full-Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className + ' ' + lora.variable}>
        {children}
      </body>

    </html>
  )
}
