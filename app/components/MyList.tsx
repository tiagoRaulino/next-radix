import React from 'react'
import MyCard from './MyCard'
import SearchBar from './SearchBar'
import { Box } from '@radix-ui/themes'


interface RoomData {
    room: string[];
    keyowner: string;
    available: boolean;
    open: boolean;
}


function MyList() {
    const roomData: RoomData = require("./RoomData.json");
    console.log(roomData.room);
    return (
        <div>
            <Box maxWidth="480px">
                <SearchBar data={roomData.room} placeholder={"Busque uma sala pelo nome"} />
            </Box>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
        </div>
    )
}

export default MyList
