const DEFAULT_PROJECTS = [
  { id: '1', src: '/projekte/2.jpeg', title: 'Innenputz Einfamilienhaus', category: 'Verputze', order: 1 },
  { id: '2', src: '/projekte/3.jpeg', title: 'Trockenbau Bürokomplex', category: 'Trockenbau', order: 2 },
  { id: '3', src: '/projekte/4.jpeg', title: 'Fassadensanierung', category: 'Fassaden', order: 3 },
  { id: '4', src: '/projekte/5.jpeg', title: 'Außenputz Mehrfamilienhaus', category: 'Fassaden', order: 4 },
  { id: '5', src: '/projekte/6.jpeg', title: 'Deckenverkleidung Modern', category: 'Trockenbau', order: 5 },
  { id: '6', src: '/projekte/7.jpeg', title: 'Glattputz Wohnbereich', category: 'Verputze', order: 6 },
  { id: '7', src: '/projekte/8.jpeg', title: 'Renovierung Altbau', category: 'Renovierung', order: 7 },
  { id: '8', src: '/projekte/9.jpeg', title: 'Außenfassade Neubau', category: 'Fassaden', order: 8 },
]

export default defineEventHandler(async () => {
  try {
    const storage = useStorage('projects')
    const rawKeys = await storage.getKeys()

    // Strip namespace prefix (e.g. "projects:1" → "1")
    const keys = rawKeys.map(k => k.includes(':') ? k.split(':').pop()! : k)

    if (keys.length === 0) {
      for (const p of DEFAULT_PROJECTS) {
        await storage.setItem(p.id, p)
      }
      return DEFAULT_PROJECTS
    }

    const items = await Promise.all(keys.map(k => storage.getItem(k)))
    const valid = (items.filter(Boolean) as any[]).sort((a, b) => (a.order || 0) - (b.order || 0))

    return valid.length > 0 ? valid : DEFAULT_PROJECTS
  } catch {
    return DEFAULT_PROJECTS
  }
})
