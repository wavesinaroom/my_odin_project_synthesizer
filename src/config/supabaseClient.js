import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bjzpjubfuupzugdzzwzv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqenBqdWJmdXVwenVnZHp6d3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MjEzNDgsImV4cCI6MjAwNjQ5NzM0OH0.UIpHOYVFoBTTIPDTpyB5JIB124vdz3B8a_IN1nEVD54';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

