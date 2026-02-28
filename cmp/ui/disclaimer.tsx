import { 
  txt2
} from "../cst/constants"

export default function Disclaimer() {
  return (
    <div style={{display: 'flex', width: 600, maxWidth: '80vw', justifyContent: 'center', alignItems: 'center'}}>
      <pre style={{margin: 0, color: txt2, fontSize: 10, whiteSpace: 'pre-wrap'}}>
        {'Swift, SwiftUI, iOS, Xcode, and Objective-C are trademarks of Apple Inc.'}
      </pre>
    </div>
  )
}