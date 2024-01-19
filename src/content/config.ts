import { z, defineCollection } from 'astro:content'

const bookmarks = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    url: z.string(),
    icon: z.string(),
    color: z.string().optional(),
    type: z.string().optional()
  }),
});

export const collections = {
  bookmarks
}
