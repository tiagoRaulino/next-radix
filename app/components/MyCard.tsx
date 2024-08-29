import { Box, Card, Flex, Text, Badge, Button } from '@radix-ui/themes';

function MyCard() {
    return (
        <div>
            <Box maxWidth="480px">
                <Card>
                    <Flex gap="3" align="center">
                        <Box>
                            <Text as="div" size="3" weight="bold">
                                Sala 1
                            </Text>
                            <Text as="div" size="2" color="gray">
                                Posse da chave: Marina Santos
                            </Text>
                        </Box>
                        <Flex gap="2" ml={"auto"}>
                            <Badge color="green">Disponivel</Badge>
                            <Button ml={"3"}>Repassar</Button>
                        </Flex>
                    </Flex>
                </Card>
            </Box>
        </div>
    )
}

export default MyCard
