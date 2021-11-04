import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useState } from 'react'
import Widget from '../../atoms/Widget';
import { supabase } from '../../config/supabase';
import * as dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);



const BrowserlyWidget: React.FC = () => {
  const [duration, setDuration] = useState<string>();
  const fetchIt = useCallback(async () => {
    const { data, error } = await supabase
    .from('WebsiteVisit')
    .select()

    // TODO error handling
    const timeSpent = data?.reduce((prev, curr) => prev + curr.end - curr.start , 0)
    const d = dayjs.duration(timeSpent, 'milliseconds');
    setDuration(`${d.format('H')}h:${d.format('m')}m`)
  }, [])

  useEffect(() => {
    fetchIt();
  }, [fetchIt])
  
  return <Widget title="Browserly" url="/browserly" >
    {/* TODO add loading */}
    {duration && <div className="text-2xl">{`Today: ${duration}`}</div>}
  </Widget>
};


export default BrowserlyWidget
