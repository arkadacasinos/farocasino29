import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-f3k9',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="d382177eaf674ad6" />
        <title>Фаро Казино — FARO Casino официальный сайт и рабочее зеркало, играть онлайн</title>
        <meta
          name="description"
          content="Фаро Казино онлайн: FARO Casino официальный сайт и рабочее зеркало для входа с телефона и ПК. Играйте в слоты и рулетку, забирайте бонусы новым игрокам и участвуйте в гонке рефералов."
        />
        <meta
          name="keywords"
          content="faro casino, faro casino зеркало, faro casino играть, faro casino официальный, faro casino официальный сайт, фаро казино, фаро казино зеркало, фаро казино зеркало рабочее, фаро казино играть, фаро казино онлайн, фаро казино официальный, фаро казино официальный сайт"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="theme-color" content="#0b0b0e" />
        <link rel="canonical" href="https://farocasino29.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Фаро Казино" />
        <meta property="og:url" content="https://farocasino29.vercel.app" />
        <meta
          property="og:title"
          content="Фаро Казино — FARO Casino официальный сайт и рабочее зеркало, играть онлайн"
        />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт: рабочее зеркало, вход и регистрация, бонусы новым игрокам, слоты, рулетка и гонка рефералов 3 000 000 ₽."
        />
        <meta property="og:image" content="https://farocasino29.vercel.app/img/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Фаро Казино — FARO Casino официальный сайт и рабочее зеркало"
        />
        <meta
          name="twitter:description"
          content="Рабочее зеркало Фаро Казино, вход и регистрация, бонусы и слоты. Играйте в Faro Casino онлайн с телефона и ПК."
        />
        <meta name="twitter:image" content="https://farocasino29.vercel.app/img/hero.jpg" />
      </head>
      <body className={`${manrope.className} f3k9-body`}>{children}</body>
    </html>
  )
}
