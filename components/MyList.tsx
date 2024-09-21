'use client'

import { Container } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import MyCard from './MyCard';
import SearchBar from "./SearchBar";


interface RoomData {
    floor: number;
    id: 1
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
        fetch('https://portuno-api.vercel.app/classrooms')
            .then(response => response.json())
            .then(data => {
                // Assuming the structure is { data: [...] }
                setRoomData(data.data || []);
            })
            .catch(error => console.error('Error fetching local room data:', error));
    }, []);

    const filteredRooms = roomData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Container maxWidth={"480px"}>
                <SearchBar search={search} onChange={setSearch} />
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
            </Container>
        </div>
    );
}

export default MyList;

