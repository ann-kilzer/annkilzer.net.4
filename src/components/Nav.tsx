import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const links = [
  { to: '/', label: 'Home' },
  { to: '/software', label: 'Software' },
  { to: '/art', label: 'Fine Art' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  const { i18n } = useTranslation()
  const isJa = i18n.language === 'ja'

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 glass-strong">
      <span className="font-mono text-sm tracking-widest gradient-text font-semibold">
        ann kilzer
      </span>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 list-none m-0 p-0">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 no-underline ${
                    isActive
                      ? 'gradient-text font-semibold'
                      : 'text-green-700/70 hover:text-green-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => i18n.changeLanguage(isJa ? 'en' : 'ja')}
          className="font-mono text-xs px-3 py-1 glass text-green-700 hover:bg-emerald-100/60 transition-colors duration-200 cursor-pointer"
          aria-label="Switch language"
        >
          {isJa ? 'EN' : '日本語'}
        </button>
      </div>
    </nav>
  )
}
