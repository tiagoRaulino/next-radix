'use client';

import { Table, Box } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import { fetchTransferKey } from '@/app/api/fetchTransferKey';
import { fetchProfileData } from '@/app/api/fetchProfileData';
import { fetchRoomData } from '@/app/api/fetchRoomData';

interface TransferKey {
    classroom: string;
    keyPasser: string;
    keyReceptor: string;
    timeStamp: string;
}

interface UserProfile {
    ddd: number;
    id: number;
    name: string;
    number: number;
    password: string;
}

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

const KeyExchangeTable: React.FC = () => {
    const [transferKeys, setTransferKeys] = useState<TransferKey[]>([]);
    const [roomData, setRoomData] = useState<RoomData[]>([]);
    const [profileData, setProfileData] = useState<UserProfile[]>([]);

    // Fetch transfer keys
    useEffect(() => {
        fetchTransferKey().then(setTransferKeys);
    }, []);

    // Fetch room data
    useEffect(() => {
        fetchRoomData().then(setRoomData);
    }, []);

    // Fetch profile data
    useEffect(() => {
        fetchProfileData().then(setProfileData);
    }, []);

    // Helper function to get short name for classroom ID
    const getClassroomShortName = (classroomId: string) => {
        const classroom = roomData.find((room) => room.id === Number(classroomId));
        return classroom ? classroom.short_name : 'classroom mock data';
    };

    // Helper function to get user name by ID
    const getUserName = (userId: string) => {
        const user = profileData.find((profile) => profile.id === Number(userId));
        return user ? user.name : 'user mock data';
    };

    return (
        <>
            <Box
                style={{
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    width: '100%',
                }}
            >
                <Table.Root variant="surface">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Chave</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Repassante</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Destinatário</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Horário</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {transferKeys.map((data, index) => (
                            <Table.Row key={index}>
                                <Table.RowHeaderCell>{getClassroomShortName(data.classroom)}</Table.RowHeaderCell>
                                <Table.Cell>{getUserName(data.keyPasser)}</Table.Cell>
                                <Table.Cell>{getUserName(data.keyReceptor)}</Table.Cell>
                                <Table.Cell>{new Date(data.timeStamp).toLocaleTimeString()}</Table.Cell>
                                <Table.Cell>{new Date(data.timeStamp).toLocaleDateString()}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
        </>
    );
};

export default KeyExchangeTable;
