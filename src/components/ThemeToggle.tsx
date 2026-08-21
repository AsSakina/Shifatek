import { Moon, Sun } from 'lucide-react'
import { useContent } from '../lib/ContentContext'
import { useTheme } from '../lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { ui } = useContent()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? ui.switchToLight : ui.switchToDark}
      aria-pressed={dark}
      title={dark ? ui.lightTheme : ui.darkTheme}
    >
      {dark ? <Sun strokeWidth={1.7} /> : <Moon strokeWidth={1.7} />}
    </button>
  )
}
