export default function HeaderBar() {
  return (
    <header className="f3k9-hdr">
      <a className="f3k9-logo" href="/" aria-label="Faro Casino — на главную">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 8.5l4.4 3.2L12 4.8l4.6 6.9L21 8.5l-1.7 8H4.7L3 8.5z" />
          <path d="M4.5 18h15v2.2h-15z" />
        </svg>
        FARO
      </a>
      <nav className="f3k9-hdr-act" aria-label="Вход и регистрация">
        <a className="f3k9-btn-ghost" href="#site">
          Вход
        </a>
        <a className="f3k9-btn-gold" href="#site">
          Регистрация
        </a>
      </nav>
    </header>
  )
}
