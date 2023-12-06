import {ReactNode} from "react";
import './layout.css';
import { Providers } from './providers';


export const metadata = {
  title: 'Tree-frog',
  description: 'Have a better field of view than a tree frog..',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
