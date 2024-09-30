import { Box, Container, Flex } from "@radix-ui/themes";
import MyList from "../components/MyList";
import { Heading } from "@radix-ui/themes";
import KeyExchangeTable from "@/components/KeyExchangeTable";

export default function Home() {
  return (
    <Flex
      direction="column"
      justify="start"
      className="px-2 text-white"
      style={{ minHeight: `calc(100vh - 57px)` }}
    >
      <Container>
        <Flex className="block center gap-8 md:flex">
          <Box mb="4">
            <Heading mb="5" mt="6" size="7">Lista de salas</Heading>
            <MyList />
          </Box>
          <Box className="max-w-screen-lg">
            <Heading mb="5" mt="6" size="7">Historico de trocas</Heading>
            <KeyExchangeTable />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
