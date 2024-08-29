import { Card, Flex, Text, Badge, Box, Button } from "@radix-ui/themes";

interface MyCardProps {
    id: number;
    room: string;
    keyowner: string;
    available: boolean;
}

const MyCard: React.FC<MyCardProps> = ({ room, keyowner, available, id }) => {
    return (
        <Box key={id} maxWidth="480px">
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
                        {keyowner === "you" && <Button ml={"3"}>Repassar</Button>}
                        {available ? (
                            <Badge color="green">Disponivel</Badge>
                        ) : (
                            <Badge color="red">Indisponivel</Badge>
                        )}
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
};

export default MyCard;
