import { useCallback, useEffect } from "react";
import BrowserlyWidget from "../components/dashboard/BrowseryWidget";
import { supabase } from "../config/supabase";
import PrivatePage from "../src/components/PrivatePage";

export default function Dashboard() {

  return (
    <PrivatePage title="Dashboard">
      <BrowserlyWidget />
    </PrivatePage>
  )
}
