
import Hello from "@/app/dashboard/home/page";


import { createClient } from "./utils/supabase/server";

export default function Home() {
  return (
    <>
    <Hello />
    </>
  );
}
