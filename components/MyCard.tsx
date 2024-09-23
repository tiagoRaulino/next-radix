import { Card, Flex, Text, Badge, Box, Button } from "@radix-ui/themes";
import MyModal from "./MyModal";
import ModalContent1 from "./ModalContent1";
import ModalContent2 from "./ModalContent2";

interface RoomData {
    floor: number;
    id: number;
    name: string;
    status: string;
    user: any;
}

const MyCard: React.FC<RoomData> = ({ floor, name, user, status, id }) => {
    const getStatusBadge = (status: string) => {
        if (status === "avaliable") {
            return <Badge variant="outline" color="gray">Chave disponível</Badge>;
        } else if (status === "occupied") {
            return <Badge color="green">Aberta</Badge>;
        }
        return null;
    };

    return (
        <Box key={id} maxWidth="480px">
            <Card size="2">
                <Flex gap="3" align="center">
                    <div>
                        <Text as="div" size="3" weight="bold" mb="2">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Atualmente com:
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {user}
                        </Text>
                    </div>
                    <Flex direction="column" align="end" className="ml-auto justify-between">
                        <div className="mb-3">
                            {getStatusBadge(status)}
                        </div>
                        <div>
                            {user === "Secretaria" && (
                                <MyModal buttonLabel="Solicitar" title="Solicitação de chave">
                                    <ModalContent2 />
                                </MyModal>
                            )}
                            {user === "João Victor Alves" && (
                                <MyModal buttonLabel="Repassar" title="Repasse de chave">
                                    <ModalContent2 />
                                </MyModal>
                            )}
                        </div>
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
};

export default MyCard;

