import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nykgmfhevxounyeopspx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55a2dtZmhldnhvdW55ZW9wc3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4Mzg5MjksImV4cCI6MjA1MTQxNDkyOX0.kj8Zkek9OOHwhSYy_v_tmapqC2J-vmTIxSs1ykJ408k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
