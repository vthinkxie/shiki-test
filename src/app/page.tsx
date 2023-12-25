import {highlight} from "@/lib/shiki";
async function getHTML() {
  return await highlight(
    `console.log('hi next.js')`,
    'github-dark',
    'javascript'
  )
}
export default async function Home() {
  const html = await getHTML()
  return (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
