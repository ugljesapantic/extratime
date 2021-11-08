import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react'

import PrivatePage from '../src/components/PrivatePage';
import Button from '../atoms/Button';
import { sendIt } from '../src/utils/extension';
import { usePomodoro } from '../lib/use-pomodoro';

const Pomodoro: React.FC = () => {
  const {timeLeft, hasActive, paused} = usePomodoro();

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

  const resume = useCallback(() => sendIt({
    type: 'pomodoro', data: { action: 'start' }
  }), [])
  
  return <PrivatePage title="Pomodoro">
    <div className="flex self-center justify-center space-x-4">
      {!hasActive && <Button onClick={start} >Start</Button>}
      {hasActive && !paused && <Button onClick={pause} >Pause</Button>}
      {hasActive && paused && <Button onClick={resume} >Resume</Button>}
      {hasActive && <Button onClick={stop} >Stop</Button>}
    </div>
    {hasActive && <div className="self-center my-auto text-9xl">{timeLeft}</div>}
  </PrivatePage>
};


export default Pomodoro
