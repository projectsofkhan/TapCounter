// supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://wfjiknqombllucggyhfy.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmamlrbnFvbWJsbHVjZ2d5aGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NTc1NjIsImV4cCI6MjEwODMzMzU2Mn0.ot7uA41pAexseYfnO3pcyrrrv6O4SeW-EOo3AGo0lG8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Validates session access. Redirects back to index.html if unauthenticated.
 */
export function checkAccess() {
  const isUnlocked = sessionStorage.getItem('zk_space_unlocked');
  if (isUnlocked !== 'true') {
    window.location.href = 'index.html';
  }
}

/**
 * Logs out and clears the session.
 */
export function lockSpace() {
  sessionStorage.removeItem('zk_space_unlocked');
  window.location.href = 'index.html';
}
