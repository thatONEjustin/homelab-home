import { getCollection, getEntries } from "astro:content"

export interface MenuItemType {
  slug: string,
}

let main_menu = async () => {
  const bookmarks_collection = await getCollection('bookmarks')
  const bookmarks = await getEntries(bookmarks_collection)

  let slugs = ['all', ... new Set(bookmarks.map(({ id }) => id.split('/')[0]))]

  return slugs.map((item_slug) => {
    return {
      label: item_slug,
      url: `?filter=${item_slug}`
    }
  })
}

export const menu_data = await main_menu().then(data => data)
