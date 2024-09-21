import { Card, Flex, Text, Badge, Box, Button } from "@radix-ui/themes";

interface RoomData {
    floor: number;
    id: number;
    name: string;
    status: string;
    user: any;
}

const MyCard: React.FC<RoomData> = ({ floor, name, user, status, id }) => {
    return (
        <Box key={id} maxWidth="480px">
            <Card size={"2"}>
                <Flex gap="3" align="center">
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Atualmente com:
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {user}
                        </Text>
                    </Box>
                    <Flex gap="3" ml={"auto"}>
                        {status ? (
                            <Badge color="green">Disponivel</Badge>
                        ) : (
                            <Badge color="red">Indisponivel</Badge>
                        )}
                        {user === "Secretaria" && <Button variant="outline" data-accent-color="gray">Solicitar</Button>}
                        {user === "João Victor Alves" && <Button>Repassar</Button>}
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
};

export default MyCard;
