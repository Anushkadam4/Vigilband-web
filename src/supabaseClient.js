import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ujgdvhpvthdlbcvijwbd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ2R2aHB2dGhkbGJjdmlqd2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNzI5NDgsImV4cCI6MjA2NTc0ODk0OH0.pQeQJZniOu86qyz77dK7oXSkguMVRlmloh6rZOsYmdI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


