import { ReactNode } from "react"
import { CSSProperties } from "react"

function Column({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: 20, 
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    padding: 0
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