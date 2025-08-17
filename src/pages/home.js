import { motion } from 'framer-motion'
import Stop from '../cmp/Stop'

let palette = {
  white: 'rgb(255,255,255)',
  pink: 'rgba(186, 2, 100, 1)',
  cyan: 'rgba(48, 182, 222, 1)',
  fadedBlue: 'rgba(58, 139, 189, 1)',
  deepBlue: 'rgba(3, 140, 225, 1)',
  green: 'rgba(95, 227, 83, 1)',
  orange: 'rgba(233, 70, 0, 1)',
  purple: 'rgba(126, 89, 228, 1)',
  comment: 'rgba(0, 166, 3, 1)',
  darkComment: 'rgba(1, 81, 2, 1)',
}

function Home() {
  return (
    <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', width: '100vw', height: '100vh'}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 2.0 }}
    >
      <div style={{background: 'rgba(155, 41, 41, 1)', borderRadius: 4, fontSize: 11}}>
        <p style={{color: 'white', margin: 0, padding: '2px 6px 2px 6px'}}>{'Card.suit not in {"h", "s", "d", "c"}'}</p>
        {/* <p style={{color: 'white', margin: 0, padding: '2px 6px 2px 6px'}}>{'Card.rank not in [0, 13)'}</p> */}
      </div>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 4}}>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>struct</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.cyan, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'suit'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'String'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'rank'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'String'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{height: 24, padding: 0, margin: 0}}/>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>func</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>for</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card:</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.green, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>in</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{suit:'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"h"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"s"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"d"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"c"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'rank:'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'['}</pre>
          <pre style={{color: palette.purple, display: 'inline', padding: 0, margin: 0}}>{'0'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{','}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.purple, display: 'inline', padding: 0, margin: 0}}>{'13'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{') ->'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>Int</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'return the value of the Card...'}</p>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
      </div>
    </motion.div>
  )
}

/*
func login(username: String in {#"^(?=.*\d)[A-Za-z\d]{8,}$"#}, password: String) async -> Bool {
    /// request the server validate the username and password...
}
*/

export default Home