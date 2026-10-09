import { Gift, Coins, Smartphone } from 'lucide-react'

export default function PromoCards() {
  return (
    <section className="f3k9-cards" aria-label="Промо-предложения Faro Casino">
      <article className="f3k9-card">
        <h3>Депозитный стрик</h3>
        <p>Чем длиннее серия депозитов, тем ценнее призы</p>
        <a className="f3k9-btn-gold f3k9-btn-sm" href="#bonus">
          Начать стрик
        </a>
        <div className="f3k9-card-row" aria-label="Дни стрика">
          <span className="f3k9-strik-dot">
            <Gift aria-hidden="true" />
          </span>
          <span className="f3k9-strik-dot">
            <Gift aria-hidden="true" />
          </span>
          <span className="f3k9-strik-dot">
            <Gift aria-hidden="true" />
          </span>
          <span className="f3k9-strik-dot">4</span>
          <span className="f3k9-strik-dot">5</span>
          <span className="f3k9-strik-dot">6</span>
          <span className="f3k9-strik-dot">
            <Gift aria-hidden="true" />
          </span>
          <span className="f3k9-strik-dot">
            <Gift aria-hidden="true" />
          </span>
        </div>
        <img
          className="f3k9-card-img"
          src="/img/chest.jpg"
          alt="Сундук с деньгами и золотыми монетами"
          width={560}
          height={560}
          loading="lazy"
        />
      </article>

      <article className="f3k9-card">
        <h3>Faro Casino App</h3>
        <p>Скачивайте мобильное приложение и получайте эксклюзивные бонусы</p>
        <span className="f3k9-android">
          <Smartphone aria-hidden="true" />
          Доступно для Android
        </span>
        <a className="f3k9-btn-gold f3k9-btn-sm" href="#online">
          Скачать
        </a>
        <img
          className="f3k9-card-img"
          src="/img/app.jpg"
          alt="Мобильное приложение Faro Casino на смартфоне"
          width={560}
          height={560}
          loading="lazy"
        />
      </article>

      <article className="f3k9-card">
        <h3>Миссии</h3>
        <p>Выполняйте задания, собирайте Faro Coins и обменивайте их на награды</p>
        <div className="f3k9-mrow">
          Завершите 3 депозита
          <span className="f3k9-coin-chip">
            <Coins aria-hidden="true" />
            +12 Faro Coins
          </span>
        </div>
        <a className="f3k9-btn-ghost f3k9-btn-sm f3k9-btn-line" href="#vip">
          Начать
        </a>
        <img
          className="f3k9-card-img"
          src="/img/darts.jpg"
          alt="Золотая мишень с дротиками"
          width={560}
          height={560}
          loading="lazy"
        />
      </article>
    </section>
  )
}
