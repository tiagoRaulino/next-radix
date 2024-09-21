'use client'

import MyModal from "@/components/MyModal";
import MyList from "../components/MyList";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <Heading mb="5" mt="6" size="7">Lista de salas</Heading>
      <MyModal buttonLabel="Repassar">
        <p>This is some dynamic content inside the modal!</p>
        <p>You can add more content as needed.</p>
      </MyModal>
      <MyList/>
    </div>
  );
}
