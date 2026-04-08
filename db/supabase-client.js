// === SUPABASE CLIENT ===
// Reads credentials from .env via a config object
// In a plain HTML/JS app we load these directly since we have no build tool

const SUPABASE_URL = 'https://rirrnghphqecrfebqtzn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcnJuZ2hwaHFlY3JmZWJxdHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MDA1MzksImV4cCI6MjA5MTE3NjUzOX0.lXPIHCETu6qAhenx9PHcY-61fIn02l8CPqPWu0Rke9I'; // paste your real anon key

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);