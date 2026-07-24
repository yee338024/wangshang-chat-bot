import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const siteRoot = 'https://yee338024.github.io/wangshang-chat-bot/'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = path.join(repoRoot, 'docs')
const publicDir = path.join(docsDir, 'public')

const ignoredDirs = new Set(['.vitepress', 'public', 'assets'])

async function walkMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  const files = await Promise.all(
    entries.map(async (entry) => {
      const abs = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        if (ignoredDirs.has(entry.name)) {
          return []
        }
        return walkMarkdownFiles(abs)
      }

      if (!entry.isFile() || !entry.name.endsWith('.md')) {
        return []
      }

      return [abs]
    })
  )

  return files.flat()
}

function toRouteFromAbsoluteMdPath(absMdPath) {
  const relativePath = path.relative(docsDir, absMdPath).replaceAll('\\', '/')

  let route = relativePath.replace(/\.md$/, '')
  route = route.replace(/(^|\/)index$/, '$1')

  return route
}

function toISODate(date) {
  const yyyy = date.getUTCFullYear()
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0')
  const dd = String(date.getUTCDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

async function main() {
  await fs.mkdir(publicDir, { recursive: true })

  const markdownFiles = await walkMarkdownFiles(docsDir)
  markdownFiles.sort()

  const urls = await Promise.all(
    markdownFiles.map(async (absMdPath) => {
      const route = toRouteFromAbsoluteMdPath(absMdPath)
      const loc = new URL(route, siteRoot).toString()
      const stat = await fs.stat(absMdPath)
      const lastmod = toISODate(stat.mtime)

      return { loc, lastmod }
    })
  )

  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.flatMap((u) => [
      '  <url>',
      `    <loc>${u.loc}</loc>`,
      `    <lastmod>${u.lastmod}</lastmod>`,
      '  </url>'
    ]),
    '</urlset>',
    ''
  ]

  await fs.writeFile(path.join(publicDir, 'sitemap.xml'), xmlLines.join('\n'), 'utf8')
}

main()
