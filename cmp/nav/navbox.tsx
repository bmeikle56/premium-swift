import { CSSProperties } from "react";
import PSButton from "../ui/psbutton";

const sections: [string, string][] = [
  ['Swift', '50 minutes'],
  ['SwiftUI', '40 minutes'],
  ['SDK', '20 minutes'],
  ['UIKit', '10 minutes'],
  ['Architecture', '15 minutes'],
  ['Practice', '60 minutes']
]

export default function Navbox() {
  const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, auto)',
    gap: 16,
  }

  return (
    <div style={style}>
      {[...sections].map((tuple, idx) => <PSButton key={idx} txt={tuple[0]} subtxt={tuple[1]} route={`/study/${tuple[0].toLowerCase()}`}/>)}
    </div>
  )
}