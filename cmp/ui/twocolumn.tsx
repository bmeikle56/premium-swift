import { ReactNode } from "react"
import { CSSProperties } from "react"
import { bg1 } from "../cst/constants"

function Column({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: 20, 
    background: bg1,
    borderRadius: 8,
    width: '100%',
    padding: 16
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default function TwoColumn({ left, right }: { left: ReactNode, right: ReactNode }) {
  return (
    <div className="two-col">
      <Column>
        {left}
      </Column>
      <Column>
        {right}
      </Column>
    </div>
  )
}