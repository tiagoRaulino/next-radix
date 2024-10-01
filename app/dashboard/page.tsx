'use client'

import { Card, Container, Flex, Heading, Box, TextField, Button } from "@radix-ui/themes";
import ProfilesList from "@/components/ProfilesList";
import MyModal from "@/components/MyModal";
import ModalNewUser from "@/components/ModalNewUser";

export default function Dashboard() {
    return (
        <Container>
            <Flex className="block center gap-8 md:flex px-2">
                <MyModal buttonLabel="Cadastrar usuário" title="Cadastrar usuário">
                    <ModalNewUser />
                </MyModal>
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