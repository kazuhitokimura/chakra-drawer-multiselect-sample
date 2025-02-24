"use client"

import { createListCollection } from "@chakra-ui/react";
import { SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText, } from "./ui/select"

export default function SampleSelectPatternB() {
  return (
    <SelectRoot multiple collection={frameworks} size="sm" width="100%">
      <SelectLabel>Select options</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="" />
      </SelectTrigger>
      <SelectContent zIndex={999999}>
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
  ],
})
