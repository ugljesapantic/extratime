import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import PrivatePage from '../src/components/PrivatePage';
import { supabase } from '../config/supabase';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { sendIt } from '../src/utils/extension';


const Pomodoro: React.FC = () => {
  // const [duration, setDuration]  = useState();
  // const [left, setLeft] = useState();

  useEffect(() => {
    const doer = (message: any) => {
      console.log(message, 'lalala')
    }
    chrome.runtime.onMessageExternal.addListener(doer)

    return () => {
      chrome.runtime.onMessageExternal.removeListener(doer)
    }
  }, [])
  
  return <PrivatePage title="Pomodoro">
    <Button onClick={() => sendIt({type: 'pomodoro', data: { duration: 25*60 }})} />
  </PrivatePage>
};


export default Pomodoro
