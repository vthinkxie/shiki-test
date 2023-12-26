'use server'

import {highlight} from "@/lib/shiki";

export async function getHTML(code: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return await highlight(
    code,
    'github-light',
    'javascript'
  )
}
