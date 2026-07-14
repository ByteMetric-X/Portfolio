import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Both are injected at build time via GitHub Actions secrets (see
// .github/workflows/deploy.yml and README.md). The client is undefined
// until both are set, so the contact form can fail gracefully.
export const supabase = url && anonKey ? createClient(url, anonKey) : null
