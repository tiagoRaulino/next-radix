'use client'

import { Container, Box } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import MyCard from './MyCard';
import SearchBar from "./SearchBar";
import { fetchRoomData } from '../app/api/fetchRoomData';  // Import the function

interface RoomData {
    floor: number;
    id: number;
    name: string;
    professor: any;
    short_name: string;
    status: string;
    type: string;
    user: any;
}

function MyList() {
    const [search, setSearch] = useState<string>('');
    const [roomData, setRoomData] = useState<RoomData[]>([]);

    useEffect(() => {
        fetchRoomData().then(setRoomData);
    }, []);

    const filteredRooms = roomData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container maxWidth={"480px"}>
            <SearchBar search={search} onChange={setSearch} />
            <Box style={{ maxHeight: '720px', overflowY: 'auto', width: '100%' }}>
                {filteredRooms.map((data, index) => (
                    <MyCard
                        key={index}
                        id={index}
                        name={data.name}
                        user={data.user ? data.user : "Secretaria"}
                        status={data.status}
                        floor={data.floor}
                    />
                ))}
            </Box>
        </Container>
    );
}

export default MyList;
