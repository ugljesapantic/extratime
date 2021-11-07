import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react'

import day from '../lib/day';
import duration from 'dayjs/plugin/duration';
import PrivatePage from '../src/components/PrivatePage';
import { supabase } from '../config/supabase';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { sendIt } from '../src/utils/extension';
import { usePomodoro } from '../lib/use-pomodoro';



const Pomodoro: React.FC = () => {
  const {timeLeft, hasActive} = usePomodoro();

  // TODO 25 configurable
  const start = useCallback(() => sendIt({
    type: 'pomodoro', data: { duration: 9, action: 'start' }
  }), [])

  const stop = useCallback(() => sendIt({
    type: 'pomodoro', data: { action: 'stop' }
  }), [])

  const pause = useCallback(() => sendIt({
    type: 'pomodoro', data: { action: 'pause' }
  }), [])
  
  return <PrivatePage title="Pomodoro">
    <div className="flex self-center justify-center">
      {!hasActive && <Button onClick={start} >Start</Button>}
      {hasActive && <Button onClick={pause} >Pause</Button>}
      {hasActive && <Button onClick={stop} >Stop</Button>}
    </div>
    {hasActive && <div className="text-9xl">{timeLeft}</div>}
  </PrivatePage>
};


export default Pomodoro
