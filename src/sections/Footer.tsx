import { GITHUB_REPO, RELEASES_URL, DOWNLOAD_URL } from '@/data/releases'

export function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <span className="text-base font-bold text-text-primary">
              Burnrate
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Releases
            </a>
            <a
              href={DOWNLOAD_URL}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Download
            </a>
          </nav>
        </div>

        {/* Middle */}
        <p className="mt-8 text-center text-sm text-text-secondary">
          Built by Common Tools co. &amp; Rich Sison · Crafted with Claude Code
        </p>

        {/* Bottom */}
        <p className="mt-4 text-center text-xs text-text-tertiary">
          macOS is a trademark of Apple Inc. Burnrate is not affiliated with
          Apple.
        </p>
      </div>
    </footer>
  )
}
