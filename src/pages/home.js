import { motion } from 'framer-motion'
import { useState } from 'react'
import Loading from '../cmp/Loading'

let palette = {
  white: 'rgb(255,255,255)',
  pink: 'rgba(186, 2, 100, 1)',
  cyan: 'rgba(1, 205, 236, 1)',
  fadedBlue: 'rgba(0, 112, 182, 1)',
  deepBlue: 'rgba(0, 74, 221, 1)',
  green: 'rgba(18, 220, 0, 1)',
  orange: 'rgba(233, 70, 0, 1)',
  purple: 'rgba(63, 0, 235, 1)',
  comment: 'rgba(0, 166, 3, 1)',
}

function Home() {
  const [isLoading, setLoading] = useState(true)

  if (isLoading) {
    return <Loading setLoading={setLoading}/>
  } else {
    return (
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', width: '100vw', height: '100vh'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 2.0 }}
      >
        <div style={{background: 'rgb(10,10,10)', padding: 20, borderRadius: 20, display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline'}}>func</pre>
          <div style={{width: 8}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline'}}>value</pre>
          <pre style={{color: palette.white, display: 'inline'}}>{'('}</pre>
        </div>
      </motion.div>
    )
  }
}

/*
func login(username: String in {#"^(?=.*\d)[A-Za-z\d]{8,}$"#}, password: String) async -> Bool {
    /// request the server validate the username and password...
}

----------------

struct Card {
    let suit: String
    let rank: String
}

func value(
    for card: Card in {suit: {"h", "s", "d", "c"}, rank: [0, 12]}
) -> Int {
    /// return the value of the Card...
}
*/

export default Home