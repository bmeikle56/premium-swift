import { CSSProperties } from "react";
import PSButton from "../ui/psbutton";

const sections: string[] = [
  'Swift',
  'SwiftUI',
  'SDK',
  'Objective-C',
  'UIKit',
  'Architecture'
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
      {[...sections].map((txt, idx) => <PSButton txt={txt} key={idx} route={`/study/${txt.toLowerCase()}`}/>)}
    </div>
  )
}