import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const x4v7Head = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  weight: ['600', '700'],
  variable: '--x4v7-font-head',
  display: 'swap',
})

const x4v7Body = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--x4v7-font-body',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${x4v7Head.variable} ${x4v7Body.variable}`}>
      <head>
        <title>Мартин казино официальный сайт — Martin Casino зеркало рабочее, играть онлайн</title>
        <meta
          name="description"
          content="Мартин казино официальный сайт: Martin Casino зеркало рабочее и вход онлайн без VPN. Как проверить mirror, зайти с телефона и начать играть — коротко, по делу и без лишних обещаний игроку. Адрес один."
        />
        <link rel="canonical" href="https://martin3casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#06231b" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://martin3casino.vercel.app/" />
        <meta property="og:site_name" content="Martin Casino" />
        <meta
          property="og:title"
          content="Мартин казино официальный сайт — Martin Casino зеркало рабочее, играть онлайн"
        />
        <meta
          property="og:description"
          content="Мартин казино официальный сайт: зеркало рабочее, вход онлайн без VPN и простой маршрут до первого круга. Коротко и по делу."
        />
        <meta property="og:image" content="https://martin3casino.vercel.app/images/x4v7-hero-felt.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Мартин казино официальный сайт — Martin Casino зеркало рабочее, играть онлайн"
        />
        <meta
          name="twitter:description"
          content="Зеркало рабочее, вход онлайн без VPN и простой маршрут до первого круга. Коротко и по делу."
        />
        {/* Слот для дополнительных пользовательских тегов: вставляйте meta, link и script сюда */}
      </head>
      <body>{children}</body>
    </html>
  )
}
