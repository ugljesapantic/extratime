import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import PrivatePage from '../src/components/PrivatePage';
import { supabase } from '../config/supabase';
import OriginDistribution from '../components/browserly/OriginDistribution';

dayjs.extend(duration);

const Browserly: React.FC = () => {
  const [originData, setOriginData] = useState<Map<string, number>>();

  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from('WebsiteVisit')
      .select()
      .gte('start', +dayjs().startOf('day').toDate())


    const map = new Map();
    const final = new Map();
    
    data?.forEach(item => {
      if (!map.has(item.url)) {
        try {
          const url = new URL(item.url);
          map.set(item.url, url.origin);
        } catch (e) {
          return
        }
      }
      const base = map.get(item.url);
      
      if (!final.has(base)) {
        final.set(base, 0);
      }
      const current = final.get(base);
      final.set(base, current + (item.end - item.start))
    })

    const transformed = [];
    for (const [key, value] of final.entries()) {
      transformed.push([{url: key, minutes: value / 60*1000}])
    }
    setOriginData(final)
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const originDistributionData = useMemo(() => {
    if (!originData) return [];
    const transformed = [];
    for (const [key, value] of originData.entries()) {
      transformed.push({url: key, minutes: Number((value / (60*1000)).toFixed(2))})
    }
    transformed.sort((a,b) => b.minutes - a.minutes)

    const minor = transformed.splice(30);
    const timeSpentRest = minor.reduce((p, c) => p + c.minutes, 0)
    return [...transformed, {url: 'rest', minutes: Number(timeSpentRest.toFixed(2))}];
  }, [originData])
  
  return <PrivatePage title="Browsery">
    {!!originDistributionData.length && <OriginDistribution data={originDistributionData} />}
  </PrivatePage>
};


export default Browserly
