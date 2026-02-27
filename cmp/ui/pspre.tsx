import { 
  txt1
} from "../cst/constants"

export default function PSPre({ txt }: { txt: string }) {
  return (
    <pre style={{color: txt1, margin: 0}}>
      {txt}
    </pre>
  )
}