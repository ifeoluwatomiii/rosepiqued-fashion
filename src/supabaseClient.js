
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://stcicnxizzyowffqscuv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Y2ljbnhpenp5b3dmZnFzY3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDcxNDMsImV4cCI6MTk5NzUyMzE0M30.LwukLStD7RRHwqFi10tMltF9-Z9gr6nTqCE-axC-H78"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase