import { supabase } from "../../config/supabase"

export default async function handler(req, res) {
  const {data, error} = await supabase.storage
    .from('test')
    .upload(Math.random().toString(), req.body.data);
  
  res.status(200).json({ success: !error })
}