import { DataStore } from "@aws-amplify/datastore";
import { useCallback } from "react";
import PrivatePage from "../src/components/PrivatePage";
// import { Todo } from "../src/models";

export default function Dashboard() {

  // const onClick = useCallback( async () => {
  //   await DataStore.save(new Todo({name: 'TODO', description: Math.random().toString()}))
  // }, [])

  return (
    <PrivatePage title="Dashboard">
      <div>Dashboard</div>
      {/* <button onClick={onClick}>Add it</button> */}
    </PrivatePage>
  )
}
