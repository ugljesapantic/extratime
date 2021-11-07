import React, { useCallback, useEffect } from "react";
import BrowserlyWidget from "../components/dashboard/BrowseryWidget";
import PomodoroWidget from "../components/PomdoroWidget";
import { supabase } from "../config/supabase";
import PrivatePage from "../src/components/PrivatePage";

export default function Dashboard() {

  return (
    <PrivatePage title="Dashboard">
      <div className="flex-1 grid grid-cols-4">
        <BrowserlyWidget />
        <PomodoroWidget />
      </div>
    </PrivatePage>
  )
}
