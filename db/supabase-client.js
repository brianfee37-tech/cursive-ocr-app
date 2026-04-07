// === SUPABASE CLIENT ===
// Reads credentials from .env via a config object
// In a plain HTML/JS app we load these directly since we have no build tool

const SUPABASE_URL = 'https://rirrnghphqecrfebqtzn.supabase.co';
const SUPABASE_ANON_KEY = 'your_anon_key_here'; // paste your real anon key

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);