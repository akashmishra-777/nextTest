import "./globals.css";

export const metadata = {
  title: 'Home - Counter',
  description: 'A simple counter app.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body  cz-shortcut-listen="true">{children}</body>
    </html>
  )
}
