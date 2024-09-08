'use client'

import Navbar from "@/components/Navbar";
import MyList from "../components/MyList";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Heading mb="2" size="7">Lista de salas</Heading>
      <MyList/>
    </div>
  );
}
