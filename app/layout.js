import './globals.css'

import { Inter, Montserrat, Rubik } from 'next/font/google'
// const poppins = Poppins({ subsets: ['latin'],
// weight : [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
// variable: "--font-poppins"

// })



const montserrat = Montserrat({ subsets: ['latin'],
weight : [ '400', '500', '600', '700'],
variable: "--font-montserrat"

})

const rubik = Rubik({ subsets: ['latin'],
weight : [ '400', '500', '600', '700'],
variable: "--font-rubik"

})



export const metadata = {
  title: 'Luigy Leonardo',
  description: 'Desarrollador Web | Full-Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={rubik.className + ' ' + montserrat.variable}>
        {children}
      </body>

    </html>
  )
}
