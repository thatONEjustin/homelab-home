import { getCollection, getEntries } from "astro:content"

export interface MenuItem {
  label: string,
  url: string
}

let main_menu = async () => {
  const bookmarks_collection = await getCollection('bookmarks')
  const bookmarks = await getEntries(bookmarks_collection)

  let menu_items = bookmarks.map((item) => {
    let slug = item.id.split('/')[0]
    return {
      slug: slug
    }
  })

  console.log(menu_items)

  return menu_items
}

export const menu_data: MenuItem[] = [
  {
    label: 'All',
    url: '/'
  },
  {
    label: 'Social',
    url: '?filter=social'
  },
  {
    label: 'utilities',
    url: '?filter=utils'
  },
  {
    label: 'media',
    url: '?filter=media'
  },
]
