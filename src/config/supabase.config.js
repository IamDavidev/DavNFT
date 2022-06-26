import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_SUPABASE_HOST_URI

export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY_API

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)