import { 
  bg1,
  txt1,
  pur1
} from "../cst/constants"

export default function Support() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 16, borderRadius: 8, background: bg1, height: 'fit-content', width: '80vw', maxWidth: 400, gap: 16}}>
      <p style={{color: txt1, margin: 0}}>
        <a href="mailto:bameeks56@gmail.com">
          <span style={{color: pur1, textShadow: `0 0 8px ${pur1}`}}>
            Email me
          </span>
        </a>
        {" for comments, feature recommendations, or if you were able to land a job preparing with this site!"}
      </p>
      
      <p style={{color: txt1, margin: 0}}>
        {"If you found this site helpful, please "}
        <a
          href="https://venmo.com/braedenmeikle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{color: pur1, textShadow: `0 0 8px ${pur1}`}}>
            {"consider buying me a coffee!"}
          </span>
        </a>
      </p>
    </div>
  )
}