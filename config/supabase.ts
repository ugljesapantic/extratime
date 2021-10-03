import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jzqjaygpecmkoukncqvd.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzE4MzA0MywiZXhwIjoxOTQ4NzU5MDQzfQ.HBgCxDVaJ3EPFblxKAPMwaMGM8-u06KdUIRBuD-4kEQ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)