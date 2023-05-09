const { createClient,   } = require('@supabase/supabase-js')

var SUPABASE_URL: string = 'https://blhkgfppwturxtoiqmuh.supabase.co'
var SUPABASE_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaGtnZnBwd3R1cnh0b2lxbXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NDEyOTksImV4cCI6MTk5OTExNzI5OX0.QKJbhus2EuphZKINua84EzgShljlMK0UAIjMWLsASOk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)