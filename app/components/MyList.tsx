'use client'

import { TextField, Container } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from 'react';
import MyCard from './MyCard';

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
                <form className="d-flex" role="search">
                    <TextField.Root
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </form>
                {filteredRooms.map((data, index) => (
                    <MyCard
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
