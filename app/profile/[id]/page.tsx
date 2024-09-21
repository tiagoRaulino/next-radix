'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Heading, Flex, Text, Badge, Code, Link, IconButton, AspectRatio, Box } from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';

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
      <Box className="w-full max-w-lg">
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
          <Heading size="4" className="text-xl font-bold mb-4">
            {profile.name}
          </Heading>
          <Box>
            <Flex justify="between" className="items-center mb-4">
              <Text className="text-sm font-semibold">Cargo:</Text>
              <Badge className="bg-blue-500 text-white px-2 py-1 rounded-md">
                Aluno
              </Badge>
            </Flex>
            <Flex justify="between" className="items-center mb-4">
              <Text className="text-sm font-semibold">Matrícula:</Text>
              <Flex align="center" gap="2">
                <Code className="text-sm">557860</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  className="text-gray-500"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </Flex>
            <Flex justify="between" className="items-center mb-4">
              <Text className="text-sm font-semibold">Número:</Text>
              <Flex align="center" gap="2">
                <Code className="text-sm">85 99876-3400</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  className="text-gray-500"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </Flex>
            <Flex justify="between" className="items-center mb-4">
              <Text className="text-sm font-semibold">Email:</Text>
              <Link href="mailto:vlad@workos.com" className="text-blue-400">
                vlad@workos.com
              </Link>
            </Flex>
            <Flex gap="2" className="mt-4">
              <Badge className="bg-green-600 text-white px-2 py-1 rounded-md">
                LabVis
              </Badge>
              <Badge className="bg-green-600 text-white px-2 py-1 rounded-md">
                Secretaria
              </Badge>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfilePage;
