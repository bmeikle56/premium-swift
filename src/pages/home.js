import { motion } from 'framer-motion'
import { useState } from 'react'
import Loading from '../cmp/Loading'

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

export default Home