import { 
  bg1,
  txt1
} from "../cst/constants"

export default function Support() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 12, borderRadius: 8, background: bg1, height: 'fit-content', width: '80vw', maxWidth: 400}}>
      <a href="mailto:bameeks56@gmail.com">
        <p style={{color: txt1}}>
          {"Email me"}
        </p>
      </a>
      <p style={{color: txt1}}>
        {" for comments, feature recommendations, or if you were able to land a job preparing with this site!"}
      </p>
      <p style={{color: txt1}}>
        {"If you found this site helpful, please consider buying me a coffee at "}
      </p>
      <a
        href="https://venmo.com/braedenmeikle"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  )
}