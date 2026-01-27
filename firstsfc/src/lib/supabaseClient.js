import { createClient } from '@supabase/supabase-js'

// Log the variable to see if it exists (check Console after deploy)
console.log("DEBUG: Supabase URL is", import.meta.env.VITE_SUPABASE_URL ? "Defined" : "MISSING");

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey)