import HeaderBar from '@/components/casino/header-bar'
import SideRail from '@/components/casino/side-rail'
import HeroBanner from '@/components/casino/hero-banner'
import PromoCards from '@/components/casino/promo-cards'
import SeoArticle from '@/components/casino/seo-article'
import SiteFooter from '@/components/casino/site-footer'

export default function Home() {
  return (
    <main className="f3k9-page">
      <h1 className="f3k9-sr">
        Фаро Казино — FARO Casino официальный сайт, рабочее зеркало и игра онлайн
      </h1>
      <HeaderBar />
      <div className="f3k9-shell">
        <SideRail />
        <section className="f3k9-first" aria-label="Акции Faro Casino">
          <HeroBanner />
          <PromoCards />
        </section>
      </div>
      <SeoArticle />
      <SiteFooter />
    </main>
  )
}
