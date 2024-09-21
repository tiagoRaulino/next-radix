import { Card, Flex, Text, Badge, Box, Button } from "@radix-ui/themes";
import MyModal from "./MyModal";

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
                    <div>
                        <Text as="div" size="3" weight="bold">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Atualmente com:
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {user}
                        </Text>
                    </div>
                    <Flex direction="column" align="end" className="ml-auto">
                        <div className="mb-1">
                            {status ? (
                                <Badge color="green">Disponivel</Badge>
                            ) : (
                                <Badge color="red">Indisponivel</Badge>
                            )}
                        </div>
                        <div>
                            {user === "Secretaria" && (
                                <MyModal buttonLabel="Solicitar" title="Solicitação de chave">
                                    <Flex justify="center" gap="1em">
                                        <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                                            <Text weight={"bold"}>scannear qrcode</Text>
                                        </Card>
                                        <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                                            <Text weight={"bold"}>pesquisar nome</Text>
                                        </Card>
                                    </Flex>
                                </MyModal>
                            )}
                            {user === "João Victor Alves" && (
                                <MyModal buttonLabel="Repassar" title="Repasse de chave">
                                    <Flex justify="center" gap="2">
                                        <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                                            <Text weight={"bold"}>scannear qrcode</Text>
                                        </Card>
                                        <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                                            <Text weight={"bold"}>pesquisar nome</Text>
                                        </Card>
                                    </Flex>
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
