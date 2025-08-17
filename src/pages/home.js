import { motion } from 'framer-motion'
import { useState } from 'react'
import Loading from '../cmp/Loading'

let palette = {
  white: 'rgb(0,0,0)',
  pink: 'rgb(0,0,0)',
  cyan: 'rgb(0,0,0)',
  fadedBlue: 'rgb(0,0,0)',
  deepBlue: 'rgb(0,0,0)',
  green: 'rgb(0,0,0)',
  orange: 'rgb(0,0,0)',
  purple: 'rgb(0,0,0)',
  comment: 'rgb(0,0,0)',
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
        <pre style={{color: 'white'}}>Coming now!</pre>
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