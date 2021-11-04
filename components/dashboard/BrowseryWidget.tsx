import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useEffect, useState } from 'react'
import Widget from '../../atoms/Widget';
import { supabase } from '../../config/supabase';



const BrowserlyWidget: React.FC = () => {
  const data = useState();
  const fetchIt = useCallback(async () => {
    const { data, error } = await supabase
    .from('WebsiteVisit')
    .select()
  }, [])

  useEffect(() => {
    fetchIt();
  }, [fetchIt])
  
  return <Widget title="Browserly" >
    teeest
  </Widget>
};


export default BrowserlyWidget
