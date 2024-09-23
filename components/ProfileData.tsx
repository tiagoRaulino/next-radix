'use client';

import { Heading, Flex, Text, Badge, Box, Card } from '@radix-ui/themes';
import { AvatarIcon, CheckCircledIcon } from '@radix-ui/react-icons';

interface ProfileDataProps {
    name: string;
    userId: number;
    number: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({ name, userId, number }) => {
    return (
        <Card className="max-w-lg p-4" style={{ margin: '0 auto' }}>
            <Box>
                <Heading className="text-2xl sm:text-3xl font-bold mb-4">
                    {name}
                </Heading>
                <Flex>
                    <Box mr={"6"}>
                        <Flex justify="between" className="items-center mt-1 mb-4">
                            <Text className="text-base">Cargo:</Text>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">Matrícula:</Text>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">Número:</Text>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">Email:</Text>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">Credenciais:</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex justify="between" className="items-center mb-4">
                            <Badge size="2" className="text-sm">
                                Aluno
                                <AvatarIcon />
                            </Badge>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">{userId}</Text>
                        </Flex>
                        <Flex justify="between" className="items-center mb-4">
                            <Text className="text-base">{number}</Text>
                        </Flex>
                        <Flex align="center" gap="2">
                            <Text className="text-base">joaofreitas@gmail.com</Text>
                        </Flex>
                        <Flex gap="1" className="mt-4">
                            <Badge size="2" color="green" className="text-sm">
                                LabVis
                                <CheckCircledIcon />
                            </Badge>
                            <Badge size="2" color="green" className="text-sm">
                                Secretaria
                                <CheckCircledIcon />
                            </Badge>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Card>
    );
};

export default ProfileData;
