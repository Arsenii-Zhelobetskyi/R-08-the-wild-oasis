import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bgnxktkgbloqdmiqskdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnbnhrdGtnYmxvcWRtaXFza2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTA5MTYsImV4cCI6MjAyMTQyNjkxNn0.KdTqplw7PA_y-3SiZM4s1fL8zmmxWfRn2na2khlqQkU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
