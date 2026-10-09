export default function HeroBanner() {
  return (
    <section className="f3k9-hero" aria-label="Гонка рефералов Faro Casino">
      <div className="f3k9-hero-txt">
        <h2 className="f3k9-hero-h">
          Гонка Рефералов
          <br />3 000 000 ₽
        </h2>
        <p className="f3k9-hero-p">Приглашайте друзей и выиграйте путевку на Мальдивы на двоих</p>
        <a className="f3k9-btn-gold" href="#vip">
          Участвовать
        </a>
      </div>
      <img
        className="f3k9-hero-img"
        src="/img/hero.jpg"
        alt="Гонка рефералов Faro Casino: золотой трофей и монеты"
        width={1280}
        height={640}
        fetchPriority="high"
      />
      <div className="f3k9-dots" aria-hidden="true">
        <span />
        <span className="f3k9-on" />
      </div>
    </section>
  )
}
