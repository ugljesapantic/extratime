import { useEffect, useMemo, useState } from 'react'

import day from '../lib/day';

export const usePomodoro = () => {
  const [left, setLeft] = useState<number>();
  
  useEffect(() => {
    const handler =  (message: any) => {
      if (message.data.type === 'pomodoro' && message.isTrusted) {
        setLeft(message.data.data.remaining)
      }
    }
    window.addEventListener('message', handler)

    return () => {
      window.removeEventListener('message', handler)
    }
  }, [])

  const timeLeft = useMemo(() => {
    if (!left) return null;
    return day.duration(left!, 'seconds').format('mm:ss')
  }, [left])

  console.log(left, {timeLeft, hasActive: timeLeft !== null})

  return {timeLeft, hasActive: timeLeft !== null}
}
