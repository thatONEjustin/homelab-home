export interface MenuItem {
  label: string,
  url: string
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
