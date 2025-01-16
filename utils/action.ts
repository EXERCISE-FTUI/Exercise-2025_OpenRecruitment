"use client";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function signInWithGoogle() {
  const auth_callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: auth_callback_url },
  });

  console.log(data, error);

  if (error) {
    console.error("Error signing in with Google:", error.message);
    return;
  }

  if (data?.url) {
    window.location.href = data.url; // Redirect the user
  }
}
