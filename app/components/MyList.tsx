'use client'

import { Container } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import MyCard from './MyCard';
import SearchBar from "./SearchBar";

interface RoomData {
    room: string;
    keyowner: string;
    available: boolean;
    open: boolean;
}

function MyList() {
    const [search, setSearch] = useState<string>('');
    const [roomData, setRoomData] = useState<RoomData[]>([]);

    useEffect(() => {
        fetch('../roomData.json')
            .then(response => response.json())
            .then(data => setRoomData(data))
            .catch(error => console.error('Error fetching room data:', error));
    }, []);

    const filteredRooms = roomData.filter((data) =>
        data.room.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Container maxWidth={"480px"}>
                <SearchBar search={search} onChange={setSearch} />
                {filteredRooms.map((data, index) => (
                    <MyCard
                        key={index}
                        id={index}
                        room={data.room}
                        keyowner={data.keyowner}
                        available={data.available}
                    />
                ))}
            </Container>
        </div>
    );
}

export default MyList;
