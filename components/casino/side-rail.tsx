import {
  Gift,
  Coins,
  Crosshair,
  Trophy,
  Box,
  TrendingUp,
  Users,
  Gem,
  ChevronDown,
} from 'lucide-react'
import Countdown from './countdown'

const menu = [
  { icon: Gift, label: 'Бонусы', href: '#bonus' },
  { icon: Coins, label: 'Магазин', href: '#platezhi' },
  { icon: Crosshair, label: 'Миссии', href: '#vip' },
  { icon: Trophy, label: 'Гонка рефералов', href: '#vip' },
  { icon: Box, label: 'Сундуки', href: '#bonus' },
  { icon: TrendingUp, label: 'Умножение баланса', href: '#platezhi' },
  { icon: Users, label: 'Реферальная программа', href: '#vip' },
  { icon: Gem, label: 'VIP Клуб', href: '#vip' },
]

export default function SideRail() {
  return (
    <aside className="f3k9-rail" aria-label="Меню Faro Casino">
      <div className="f3k9-wheel-card">
        <img src="/img/wheel.jpg" alt="Золотая рулетка Faro Casino" width={62} height={62} loading="lazy" />
        <div>
          <div className="f3k9-wheel-t">Рулетка удачи</div>
          <Countdown />
        </div>
      </div>
      <nav className="f3k9-menu" aria-label="Разделы клуба">
        {menu.map((item) => (
          <a className="f3k9-mi" href={item.href} key={item.label}>
            <item.icon aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="f3k9-lang">
        <span className="f3k9-flag" aria-hidden="true" />
        Русский
        <ChevronDown size={14} aria-hidden="true" />
      </div>
    </aside>
  )
}
