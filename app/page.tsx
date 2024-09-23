import { Card, Container, Flex } from "@radix-ui/themes";
import MyList from "../components/MyList";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex
      direction="column"
      justify="start"
      className="px-2 text-white"
      style={{ minHeight: `calc(100vh - 57px)` }}
    >
      <Container>
        <Heading mb="5" mt="6" size="7">Lista de salas</Heading>
        <Card style={{
          display: 'inline-block',
          padding: '1.1vh',
          margin: '0 auto',
        }}>
          <MyList />
        </Card>
      </Container>
    </Flex>
  );
}
