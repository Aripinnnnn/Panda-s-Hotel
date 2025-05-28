import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nuaoqijjbqmxnhlxtmpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YW9xaWpqYnFteG5obHh0bXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTg1MjEsImV4cCI6MjA2MDg3NDUyMX0.QOZv_6rgdG9ciKelQ4z-zVzpwWY9omWLZOyIu41jQn4"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
