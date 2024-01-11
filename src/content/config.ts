import { z, defineCollection } from 'astro:content'

const bookmarks = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  bookmarks
}
