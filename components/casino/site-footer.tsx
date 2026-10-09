const tags = [
  { label: '#ФароКазино', href: '#obzor' },
  { label: '#FaroCasino', href: '#obzor' },
  { label: '#ФароКазиноЗеркало', href: '#zerkalo' },
  { label: '#FaroCasinoЗеркало', href: '#zerkalo' },
  { label: '#ФароКазиноЗеркалоРабочее', href: '#zerkalo' },
  { label: '#ФароКазиноИграть', href: '#igrat' },
  { label: '#FaroCasinoИграть', href: '#igrat' },
  { label: '#ФароКазиноОнлайн', href: '#online' },
  { label: '#ФароКазиноОфициальный', href: '#site' },
  { label: '#FaroCasinoОфициальный', href: '#site' },
  { label: '#ФароКазиноОфициальныйСайт', href: '#site' },
  { label: '#FaroCasinoОфициальныйСайт', href: '#site' },
]

export default function SiteFooter() {
  return (
    <footer className="f3k9-ftr">
      <nav className="f3k9-tags" aria-label="Хэштеги по разделам">
        {tags.map((tag) => (
          <a className="f3k9-tag" href={tag.href} key={tag.label}>
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="f3k9-ftr-note">
        18+ Азартные игры могут вызывать зависимость. Играйте ответственно и устанавливайте лимиты.
        Материал носит информационный характер и не является офертой.
      </p>
      <p className="f3k9-ftr-note">© 2026 Фаро Казино. FARO Casino — официальный сайт и рабочее зеркало.</p>
    </footer>
  )
}
