export type Bookmark = {
  id: string,
  data: BookmarkData
}

export type BookmarkData = {
  url: string,
  icon: string,
  color: string,
  type?: string,
  ignore_all?: boolean
}
