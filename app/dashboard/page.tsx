import { Card, Container, Flex, Heading, Box, TextField, Button } from "@radix-ui/themes";
import ProfilesList from "@/components/ProfilesList";

export default function Dashboard() {
    return (
        <Container>
            <Flex className="block center gap-8 md:flex px-2">
                <Box className="w-full max-w-md rounded-lg mt-6 px-3 pt-20 pb-24 border border-[#3B3D41]">
                    <Heading mb="5" size="7" className="text-white mb-24">
                        Cadastre um usuário
                    </Heading>
                    <form>
                        <Box mb="3">
                            <TextField.Root size="3"
                                type="text"
                                placeholder="Digite sua matrícula ou Siape">
                            </TextField.Root>
                        </Box>
                        <Box mb="3">
                            <TextField.Root size="3"
                                type="text"
                                placeholder="Digite sua Senha">
                            </TextField.Root>
                        </Box>
                        <Button
                            mt="4"
                            type="submit"
                            size="4"
                            className="w-full mt-4"
                        >
                            Cadastro
                        </Button>
                    </form>
                </Box>
                <Box>
                    <Heading mb="5" mt="6" size="7">Lista de usuários</Heading>
                    <Card style={{
                        display: 'inline-block',
                        padding: '1.1vh',
                        margin: '0 auto',
                    }}>
                        <ProfilesList />
                    </Card>
                </Box>
            </Flex>
        </Container>
    );
}