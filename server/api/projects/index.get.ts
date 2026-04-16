export default defineEventHandler(async () => {
  const storage = useStorage('projects')
  const keys = await storage.getKeys()
  
  if (keys.length === 0) {
    const defaultProjects = [
      { id: '1', src: '/projekte/2.jpeg', title: 'Innenputz Einfamilienhaus', category: 'Verputze', order: 1 },
      { id: '2', src: '/projekte/3.jpeg', title: 'Trockenbau Bürokomplex', category: 'Trockenbau', order: 2 },
      { id: '3', src: '/projekte/4.jpeg', title: 'Fassadensanierung', category: 'Fassaden', order: 3 },
      { id: '4', src: '/projekte/5.jpeg', title: 'Außenputz Mehrfamilienhaus', category: 'Fassaden', order: 4 },
      { id: '5', src: '/projekte/6.jpeg', title: 'Deckenverkleidung Modern', category: 'Trockenbau', order: 5 },
      { id: '6', src: '/projekte/7.jpeg', title: 'Glattputz Wohnbereich', category: 'Verputze', order: 6 },
      { id: '7', src: '/projekte/8.jpeg', title: 'Renovierung Altbau', category: 'Renovierung', order: 7 },
      { id: '8', src: '/projekte/9.jpeg', title: 'Außenfassade Neubau', category: 'Fassaden', order: 8 },
    ]
    for (const p of defaultProjects) {
      await storage.setItem(p.id, p)
    }
    return defaultProjects
  }

  const items = await Promise.all(keys.map(k => storage.getItem(k)))
  return (items.filter(Boolean) as any[]).sort((a, b) => (a.order || 0) - (b.order || 0))
})
