export interface Release {
  version: string
  date: string
  title: string
  downloadUrl: string
  body: string
  features: string[]
  changes: string[]
  fixes: string[]
  knownIssues: string[]
}

export const latestRelease: Release = {
  version: '0.2.0-beta',
  date: '2026-02-08',
  title: 'Multi-LLM Provider Support & UI Overhaul',
  downloadUrl: 'https://github.com/wrnsnng/burnrate/releases/download/v0.2.0-beta/Burnrate-0.2.0-beta.zip',
  body: 'Burnrate now tracks usage across multiple LLM coding tools — Claude, Codex, Kimi K2.5, and Gemini CLI.',
  features: [
    'Usage summary dashboard — Quick-glance overview showing all providers side by side',
    'Collapsible provider sections — Tap anywhere on the header row to toggle details',
    'Official brand icons — Each provider displays its actual brand mark',
    'Kimi K2.5 & Gemini CLI support — Detects CLI installations automatically',
    'New cycle start alerts — Get notified when a usage cycle resets',
    'Dual reset time display — Shows both countdown and local clock time',
    'Install commands for non-installed providers',
  ],
  changes: [
    'Redesigned popover layout with summary overview and expandable provider cards',
    'Menubar source selection supports all four providers',
    'New LLMProvider protocol for extensible provider architecture',
  ],
  fixes: [
    'Content no longer flies in from the top when expanding a section',
    'Entire header row is now clickable, not just the chevron',
  ],
  knownIssues: [
    'First auto-update via Sparkle may prompt for App Management permission on macOS 13+',
  ],
}

export const GITHUB_REPO = 'https://github.com/wrnsnng/burnrate'
export const DOWNLOAD_URL = latestRelease.downloadUrl
export const RELEASES_URL = `${GITHUB_REPO}/releases`
