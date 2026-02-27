import { 
  txt1
} from "../cst/constants"

export default function PSParagraph({ txt, center }: { txt: string, center?: boolean }) {
  return (
    <div style={{display: 'flex', width: '80vw', maxWidth: 400, justifyContent: center ? 'center' : 'flex-start'}}>
      <p style={{color: txt1}}>
        {txt}
      </p>
    </div>
  )
}