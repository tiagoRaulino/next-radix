import { Card, Flex, Text, Badge, Box, Button } from "@radix-ui/themes";

interface MyCardProps {
    room: string;
    keyowner: string;
    available: boolean;
}

const MyCard: React.FC<MyCardProps> = ({ room, keyowner, available }) => {
    return (
        <Box maxWidth="480px">
            <Card>
                <Flex gap="3" align="center">
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            {room}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {keyowner}
                        </Text>
                    </Box>
                    <Flex gap="2" ml={"auto"}>
                        {available ? (
                            <Badge color="green">Disponivel</Badge>
                        ) : (
                            <Badge color="red">Indisponivel</Badge>
                        )}
                        {keyowner === "you" && <Button ml={"3"}>Repassar</Button>}
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
};

export default MyCard;
