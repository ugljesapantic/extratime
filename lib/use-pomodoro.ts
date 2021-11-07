import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react'

import day from '../lib/day';
import duration from 'dayjs/plugin/duration';
import PrivatePage from '../src/components/PrivatePage';
import { supabase } from '../config/supabase';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { sendIt } from '../src/utils/extension';



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
    if (!Number.isInteger(left)) return null;
    return day.duration(left!, 'seconds').format('mm:ss')
  }, [left])

  console.log(left, {timeLeft, hasActive: timeLeft !== null})

  return {timeLeft, hasActive: timeLeft !== null}
}
