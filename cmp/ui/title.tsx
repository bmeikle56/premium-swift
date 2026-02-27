import { 
  bg1,
  txt2,
  pur1
} from "../cst/constants"

export default function Title() {
  return (
    <div style={{display: 'flex', padding: 12, background: bg1, borderRadius: 8, fontSize: 32, gap: 6}}>
      <pre style={{color: txt2, margin: 0}}>{'<'}</pre>
      <pre style={{color: pur1, textShadow: `0 0 12px ${pur1}, 0 0 12px ${pur1}`, margin: 0}}>{'PremiumSwift'}</pre>
      <pre style={{color: txt2, margin: 0}}>{'/>'}</pre>
    </div>
  )
}