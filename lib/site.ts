export const VERSION = "0.8.1"

export const SITE = {
  name: "Terax",
  domain: "terax.app",
  url: "https://terax.app",
  tagline: "Terminal-first AI-native dev workspace",
  description:
    "Terax is a lightweight AI terminal with a built-in editor, AI agents, voice input, and live web preview. 7 MB on disk, 300 ms cold start. Free and open source. BYOK or fully local via LM Studio.",
  github: "https://github.com/crynta/terax-ai",
  githubReleases: "https://github.com/crynta/terax-ai/releases",
  issues: "https://github.com/crynta/terax-ai/issues",
  websiteRepo: "https://github.com/crynta/Terax-website",
  aur: "https://aur.archlinux.org/packages/terax-bin",
  demoVideoId: "kykgXa7sm1g",
  demoVideoUrl: "https://youtu.be/kykgXa7sm1g",
  youtube: "https://www.youtube.com/@crynta",
} as const

const releaseBase = `${SITE.githubReleases}/download/v${VERSION}`

export const DOWNLOADS = {
  macSilicon: {
    label: "macOS · Apple Silicon",
    file: `Terax_${VERSION}_aarch64.dmg`,
    arch: "Apple Silicon (M1+)",
    url: `${releaseBase}/Terax_${VERSION}_aarch64.dmg`,
    available: true,
  },
  macIntel: {
    label: "macOS · Intel",
    file: `Terax_${VERSION}_x64.dmg`,
    arch: "Intel (x86_64)",
    url: `${releaseBase}/Terax_${VERSION}_x64.dmg`,
    available: true,
  },
  linuxAppImage: {
    label: "Linux · AppImage",
    file: `Terax_${VERSION}_amd64.AppImage`,
    arch: "x86_64",
    url: `${releaseBase}/Terax_${VERSION}_amd64.AppImage`,
    available: true,
  },
  linuxDeb: {
    label: "Linux · .deb",
    file: `Terax_${VERSION}_amd64.deb`,
    arch: "Debian / Ubuntu",
    url: `${releaseBase}/Terax_${VERSION}_amd64.deb`,
    available: true,
  },
  linuxRpm: {
    label: "Linux · .rpm",
    file: `Terax-${VERSION}-1.x86_64.rpm`,
    arch: "Fedora / RHEL",
    url: `${releaseBase}/Terax-${VERSION}-1.x86_64.rpm`,
    available: true,
  },
  linuxAur: {
    label: "Linux · AUR",
    file: "terax-bin",
    arch: "Arch Linux / Manjaro",
    url: "https://aur.archlinux.org/packages/terax-bin",
    available: true,
  },
  windows: {
    label: "Windows",
    file: `Terax_${VERSION}_x64-setup.exe`,
    arch: "x86_64",
    url: `${releaseBase}/Terax_${VERSION}_x64-setup.exe`,
    available: true,
  },
} as const

export type DownloadKey = keyof typeof DOWNLOADS
