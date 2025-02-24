"use client"

import { createListCollection, SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText, } from "@chakra-ui/react"

export default function SampleSelect() {
  return (
    <SelectRoot multiple collection={frameworks} size="sm" width="100%">
      <SelectLabel>Select framework</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((movie) => (
          <SelectItem item={movie} key={movie.value}>
            {movie.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Ember.js", value: "ember" },
    { label: "Preact", value: "preact" },
    { label: "Alpine.js", value: "alpine" },
    { label: "Solid.js", value: "solid" },
    { label: "Marko", value: "marko" },
    { label: "Mithril", value: "mithril" },
    { label: "Riot.js", value: "riot" },
    { label: "Sapper", value: "sapper" },
    { label: "Nuxt.js", value: "nuxt" },
    { label: "Next.js", value: "next" },
    { label: "Gatsby", value: "gatsby" },
    { label: "Gridsome", value: "gridsome" },
    { label: "Scully", value: "scully" },
    { label: "Astro", value: "astro" },
    { label: "Blitz.js", value: "blitz" },
    { label: "Redwood.js", value: "redwood" },
    { label: "NestJS", value: "nestjs" },
    { label: "Feathers", value: "feathers" },
    { label: "AdonisJS", value: "adonis" },
    { label: "KeystoneJS", value: "keystone" },
    { label: "Ghost", value: "ghost" },
    { label: "Directus", value: "directus" },
    { label: "Cockpit", value: "cockpit" },
    { label: "DatoCMS", value: "dato" },
    { label: "Sanity", value: "sanity" },
    { label: "Prismic", value: "prismic" },
    { label: "Contentful", value: "contentful" },
    { label: "Storyblok", value: "storyblok" },
    { label: "Strapi", value: "strapi" },
  ],
})
