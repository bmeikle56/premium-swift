import { CSSProperties } from "react";
import PSButton from "../ui/psbutton";

const sections: [string, string][] = [
  ['Swift', '30 minutes'],
  ['SwiftUI', '30 minutes'],
  ['SDK', '30 minutes'],
  ['Objective-C', '30 minutes'],
  ['UIKit', '30 minutes'],
  ['Architecture', '30 minutes']
]

export default function Navbox() {
  const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
    gridTemplateRows: 'repeat(3, auto)',   // 3 rows
    gap: 16,
  }

  return (
    <div style={style}>
      {[...sections].map((tuple, idx) => <PSButton key={idx} txt={tuple[0]} subtxt={tuple[1]} route={`/study/${tuple[0].toLowerCase()}`}/>)}
    </div>
  )
}