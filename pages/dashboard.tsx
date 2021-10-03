import { DataStore } from "@aws-amplify/datastore";
import { useCallback } from "react";
import PrivatePage from "../src/components/PrivatePage";
import { WebsiteVisit } from "../src/models";
import { API } from "aws-amplify";

export default function Dashboard() {

  const onClick = useCallback( async () => {
    await DataStore.save(new WebsiteVisit({url: Math.random().toString(), start: 1, end: 2}))
  }, [])

  return (
    <PrivatePage title="Dashboard">
      <div>Dashboard</div>
      <button onClick={onClick}>Add it</button>
    </PrivatePage>
  )
}
