'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UserProfile {
  id: string;
  name: string;
  bio: string;
}

const ProfilePage = () => {
  const { id } = useParams();  // Get the dynamic `id` from the URL
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/profiles.json');
        const data: UserProfile[] = await response.json();

        // Find the profile based on the `id` from the URL
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
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfilePage;
