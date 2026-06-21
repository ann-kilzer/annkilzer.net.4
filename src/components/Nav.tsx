import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/software', label: 'Software' },
  { to: '/art', label: 'Fine Art' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 glass-strong">
      <span className="font-mono text-sm tracking-widest gradient-text font-semibold">
        ann kilzer
      </span>
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
    </nav>
  )
}
