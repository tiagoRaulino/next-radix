'use client';

import { Heading, Flex, TextField, Box, Button, Text } from '@radix-ui/themes';

function Login() {
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            className="p-2 text-white"
            style={{ minHeight: `calc(100vh - 57px)` }}
        >
            <Box className="w-full max-w-lg rounded-lg  px-3 pt-20 pb-24 border border-[#3B3D41]">
                <Heading mb="5" size="7" className="text-white mb-24">
                    Faça seu login
                </Heading>
                <form className="space-y-5">
                    <Flex direction="column" gap="2">
                        <TextField.Root size="3"
                            type="text"
                            placeholder="Digite sua matrícula ou Siape">
                        </TextField.Root>
                    </Flex>
                    <Flex direction="column" gap="2">
                        <TextField.Root size="3"
                            type="text"
                            placeholder="Digite sua Senha">
                        </TextField.Root>
                    </Flex>
                    <Button
                        type="submit"
                        variant="solid"
                        size="4"
                        className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Flex>
    );
}

export default Login;
