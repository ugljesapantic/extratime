import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import Widget from '../atoms/Widget';

dayjs.extend(duration);

const PomodoroWidget: React.FC = () => {
  
  return <Widget title="Pomodoro" url="/pomodoro" >
    {/* TODO add loading */}
    ????
  </Widget>
};


export default PomodoroWidget
