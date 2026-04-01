import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uzglipqehzzvmeesgixv.supabase.co"
const supabaseKey = "sb_publishable_KdCLMDKJMBnUf1j4FcQb_Q_Vq1Ey2a4"

export const supabase = createClient(supabaseUrl, supabaseKey)