import { useEffect, useMemo, useState } from 'react'

import day from '../lib/day';

export const usePomodoro = () => {
  const [data, setData] = useState<{left: number; paused: boolean}>() 

  
  useEffect(() => {
    const handler =  (message: any) => {
      if (message.data.type === 'pomodoro' && message.isTrusted) {
        console.log(message.data, 'ggggggggg')
        setData(message.data.data)
      }
    }
    window.addEventListener('message', handler)

    return () => window.removeEventListener('message', handler)
  }, [])

  const timeLeft = useMemo(() => {
    if (!data?.left) return null;
    return day.duration(data?.left, 'seconds').format('mm:ss')
  }, [data])

  console.log(timeLeft, data?.paused)

  return {timeLeft, hasActive: timeLeft !== null, paused: data?.paused}
}
