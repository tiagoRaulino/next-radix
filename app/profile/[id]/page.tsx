'use client';

import MyModal from '@/components/MyModal';
import EditForm from '@/components/EditForm';
import QRCodeModalContent from '@/components/QRCodeModalContent';
import { BorderSplitIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Flex, AspectRatio, Box, Button } from '@radix-ui/themes';
import ProfileData from '@/components/ProfileData';

interface UserProfile {
  ddd: number;
  id: number;
  name: string;
  number: number;
  password: string;
}

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://portuno-api.vercel.app/users/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: UserProfile = await response.json();
        setProfile(data || null);
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
      justify="start"
      align="center"
      className="px-4 text-white"
      style={{ minHeight: `calc(100vh - 57px)` }}
    >
      <Box className="w-full max-w-screen-sm">
        <Box className="p-12 max-w-sm mx-auto">
          <AspectRatio ratio={1 / 1} className="rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/400"
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl"
            />
          </AspectRatio>
        </Box>
        <ProfileData name={profile.name} userId={profile.id} number={`${profile.ddd} ${profile.number}`} />
        <Flex mt="4" gap="2" className='max-w-lg mx-auto justify-between'>
          <Flex gap="2">
            <MyModal
              buttonLabel="Editar"
              title="Editar Detalhes"
              icon={<Pencil2Icon />}
              buttonProps={{
                variant: "soft",
              }}
            >
              <EditForm profile={profile} />
            </MyModal>
            <Button variant='soft' color="red">
              Deletar
              <TrashIcon />
            </Button>
          </Flex>
          <MyModal
            buttonLabel="QR Code"
            title="QR Code"
            icon={<BorderSplitIcon />}
            buttonProps={{
              variant: "soft",
            }}
          >
            <QRCodeModalContent profileId={profile.id} />
          </MyModal>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProfilePage;
