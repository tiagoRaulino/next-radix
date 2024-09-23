'use client'

import { Box } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import MyCard from './MyCard';
import SearchBar from "./SearchBar";
import { fetchRoomData } from '../app/api/fetchRoomData';

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

    const filteredRooms = roomData
        .filter((data) =>
            data.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Box maxWidth={"480px"}>
            <SearchBar placeholder="Pesquise uma sala" search={search} onChange={setSearch} />
            <Box
                style={{
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    width: '100%',
                }}
            >
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
        </Box>
    );
}

export default MyList;
