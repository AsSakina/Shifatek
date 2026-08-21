import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? 'Passer en thème clair' : 'Passer en thème sombre'}
      aria-pressed={dark}
      title={dark ? 'Thème clair' : 'Thème sombre'}
    >
      {dark ? <Sun strokeWidth={1.7} /> : <Moon strokeWidth={1.7} />}
    </button>
  )
}
