'use client'

import { Box } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import { fetchProfileData } from '../app/api/fetchProfileData';
import ProfileCard from "./ProfileCard";

interface UserProfile {
    ddd: number
    id: number
    name: string
    number: number
    password: string
}

function ProfilesList() {
    const [search, setSearch] = useState<string>('');
    const [profileData, setProfileData] = useState<UserProfile[]>([]);

    useEffect(() => {
        fetchProfileData().then(setProfileData);
    }, []);

    const filteredUsers = profileData
        .filter((data) =>
            data.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Box style={{
            maxHeight: '70vh',
            overflowY: 'auto',
            width: '100%',
        }}>
            <SearchBar placeholder="Pesquise uma sala" search={search} onChange={setSearch} />
            <Box
                style={{
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    width: '100%',
                }}
            >
                {filteredUsers.map((profileData) => (
                    <ProfileCard name={profileData.name} userId={profileData.id} number={`${profileData.ddd} ${profileData.number}`} />
                ))}
            </Box>
        </Box>
    );
}

export default ProfilesList;
