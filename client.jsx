import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bnebdwsabdjrzbjaybud.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZWJkd3NhYmRqcnpiamF5YnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMDYxNjEsImV4cCI6MjAzNTY4MjE2MX0.adMYxoPFoTRbnEA2RYOE5dX0kvzA-1P4J-2_s_RCFI0'
export const supabase = createClient(supabaseUrl, supabaseKey)


// https://bnebdwsabdjrzbjaybud.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZWJkd3NhYmRqcnpiamF5YnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMDYxNjEsImV4cCI6MjAzNTY4MjE2MX0.adMYxoPFoTRbnEA2RYOE5dX0kvzA-1P4J-2_s_RCFI0