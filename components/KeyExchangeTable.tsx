'use client'

import { Table } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import { fetchTransferKey } from '@/app/api/fetchTransferKey';

interface TransferKey {
    classroom: string;
    keyPasser: string;
    keyReceptor: string;
    timeStamp: string;
};

const KeyExchangeTable: React.FC = () => {
    const [transferKeys, setTransferKeys] = useState<TransferKey[]>([]);

    useEffect(() => {
        fetchTransferKey().then(setTransferKeys);
    }, []);

    console.log(transferKeys);

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
                        {transferKeys.map((data, index) =>
                            <Table.Row key={index}>
                                <Table.RowHeaderCell>{data.classroom}</Table.RowHeaderCell>
                                <Table.Cell>{data.keyPasser}</Table.Cell>
                                <Table.Cell>{data.keyReceptor}</Table.Cell>
                                <Table.Cell>{data.timeStamp}</Table.Cell>
                                <Table.Cell>25/08/2024</Table.Cell>
                            </Table.Row>)}
                    </Table.Body>
                </Table.Root>
            </Box>
        </>
    );
};

export default KeyExchangeTable;
