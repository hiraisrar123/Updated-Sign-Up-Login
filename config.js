import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://zmdhtjgucjllannxjnhv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZGh0amd1Y2psbGFubnhqbmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNDQxMTksImV4cCI6MjA3NTkyMDExOX0.ZGrtfJGNk2ZZ-3EpeGcPV5bMv1nk2l6VJDJrprcdLCI';

export const supabase = createClient(supabaseUrl, supabaseKey);
