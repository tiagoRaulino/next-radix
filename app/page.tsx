'use client'

import MyList from "../components/MyList";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <Heading mb="5" mt="6" size="7">Lista de salas</Heading>
      <MyList/>
    </div>
  );
}
