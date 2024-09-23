import { Card, Container, Flex } from "@radix-ui/themes";
import { Heading } from "@radix-ui/themes";
import ProfilesList from "@/components/ProfilesList";

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      justify="start"
      className="px-2 text-white"
      style={{ minHeight: `calc(100vh - 57px)` }}
    >
      <Container>
        <Heading mb="5" mt="6" size="7">Lista de usuários</Heading>
        <Card style={{
          display: 'inline-block',
          padding: '1.1vh',
          margin: '0 auto',
        }}>
          <ProfilesList/>
        </Card>
      </Container>
    </Flex>
  );
}