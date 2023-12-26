'use client';
import {getHTML} from "@/app/actions";
import {Suspense, useState} from "react";


 function Code() {
  const [value, setValue] = useState("console.log('abc')")
  const [html, setHTML] = useState("")
  return (
    <div>
      <input value={value} onChange={e=>setValue(e.target.value)} />
      <button onClick={async ()=>{
        const highlight = await getHTML(value);
        setHTML(highlight);
      }}>Submit</button>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  )
}

export default function Home() {
  return <div><Code></Code></div>
}
