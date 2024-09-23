import { AvatarIcon } from "@radix-ui/react-icons";
import { Card, Flex, Text, Badge, Box, Avatar } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface ProfileDataProps {
    name: string;
    userId: number;
    number: string;
}

const ProfileCard: React.FC<ProfileDataProps> = ({ name, userId, number }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/profile/${userId}`);
    };

    return (
        <Box key={userId} maxWidth="480px">
            <Card onClick={handleClick} size={"2"} style={{ cursor: "pointer" }}>
                <Flex gap="3" align="center">
                    <Avatar
                        size="5"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="3" weight="bold" mb="2">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Matrícula: {userId}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Número: {number}
                        </Text>
                    </Box>
                    <Box className="block ml-auto mb-auto">
                        <Badge>
                            Aluno
                            <AvatarIcon />
                        </Badge>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default ProfileCard;
