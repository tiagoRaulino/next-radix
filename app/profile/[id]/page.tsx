'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Heading, Flex, Text, Badge, Code, Link, AspectRatio, Box } from '@radix-ui/themes';

interface UserProfile {
  id: string;
  name: string;
  bio: string;
}

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/profiles.json');
        const data: UserProfile[] = await response.json();

        const foundProfile = data.find((profile) => profile.id === id);

        setProfile(foundProfile || null);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <Flex
      direction="column"
      justify="start" // Align content at the top of the page
      align="center" // Center content horizontally
      className="min-h-screen p-4 text-white"
    >
      <Box className="w-full max-w-screen-md">
        <Box className="p-12 max-w-sm mx-auto">
          <AspectRatio ratio={1 / 1} className="rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/400"
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl"
            />
          </AspectRatio>
        </Box>
        <Box className="mt-6">
          <Heading className="text-2xl sm:text-3xl font-bold mb-4">
            {profile.name}
          </Heading>
          <Flex>
            <Box mr={"6"}>
              <Flex justify="between" className="items-center mb-4">
                <Text className="text-base sm:text-lg font-medium">Cargo:</Text>
              </Flex>
              <Flex justify="between" className="items-center mb-4">
                <Text className="text-base sm:text-lg font-medium">Matrícula:</Text>
              </Flex>
              <Flex justify="between" className="items-center mb-4">
                <Text className="text-base sm:text-lg font-medium">Número:</Text>
              </Flex>
              <Flex justify="between" className="items-center mb-4">
                <Text className="text-base sm:text-lg font-medium">Email:</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="between" className="items-center mb-4">
                <Badge className="bg-blue-500 text-white px-2 py-1 rounded-md">
                  Aluno
                </Badge>
              </Flex>
              <Flex justify="between" className="items-center mb-4">
                <Text className="text-base sm:text-lg">557860</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Text className="text-base sm:text-lg">85 99876-3400</Text>
              </Flex>
              <Flex justify="between" className="items-center mb-4">
                <Link href="mailto:vlad@workos.com" className="text-blue-400">
                  vlad@workos.com
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Flex gap="1" className="mt-4">
            <Badge className="bg-green-600 text-white px-2 py-1 rounded-md">
              LabVis
            </Badge>
            <Badge className="bg-green-600 text-white px-2 py-1 rounded-md">
              Secretaria
            </Badge>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfilePage;
