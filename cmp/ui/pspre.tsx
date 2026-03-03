import { 
  bg1,
  txt1
} from "../cst/colors"

export default function PSPre({ txt }: { txt: string }) {
  return (
    <pre style={{color: txt1, margin: 0, whiteSpace: 'pre-wrap', background: bg1, padding: 12, borderRadius: 8}}>
      {txt}
    </pre>
  )
}