'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Heading, DataList, Badge, Flex, Code, Link, IconButton, AspectRatio, Box, Container } from '@radix-ui/themes';
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
  //o conteúdo abaixo ainda será extraído para um componente para que somente algumas tags e suas props estejam no render.
  return (
    <Container>
      <Box px="5" my="5">
        <Container>
          <AspectRatio ratio={1 / 1}>
            <img
              src="https://picsum.photos/200"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
              }}
            />
          </AspectRatio>
        </Container>
      </Box>
      <Box px="5" my="3">
        <Heading mb="5" size="5">{profile.name}</Heading>
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Cargo:</DataList.Label>
            <DataList.Value>
              <Badge color="blue" variant="soft" radius="full">
                Aluno
              </Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Matrícula:</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                <Code variant="ghost">557860</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Número:</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                <Code variant="ghost">85 99876-3400</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Email:</DataList.Label>
            <DataList.Value>
              <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Value>
              <Badge color="green" variant="soft" radius="full">
                LabVis
              </Badge>
              <Badge color="green" variant="soft" radius="full">
                Secretaria
              </Badge>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Box>
    </Container>
  );
};

export default ProfilePage;
