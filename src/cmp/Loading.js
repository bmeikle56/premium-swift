import { motion } from 'framer-motion'
import { useEffect } from 'react'

function Loading({ setLoading }) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2700)
  }, [])

  return (
    <motion.div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      flexDirection: 'row',
      gap: '80px',
      height: '100vh'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}>
      <pre style={{color: 'white'}}>Coming now!</pre>
    </motion.div>
  )
}

export default Loading