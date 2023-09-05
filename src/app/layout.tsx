export const metadata = {
  title: 'Tree-frog',
  description: 'ave a better field of view that a tree frog..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
