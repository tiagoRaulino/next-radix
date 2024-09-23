import { Table } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';

type ExchangeHistory = {
    keyroom: string;
    sender: string;
    receptor: string;
    time: string;
    day: string;
};

const exchanges: ExchangeHistory[] = [
    { keyroom: 'Room 101', sender: 'Alice', receptor: 'Bob', time: '10:00 AM', day: '2024-09-21' },
    { keyroom: 'Room 202', sender: 'Charlie', receptor: 'David', time: '11:30 AM', day: '2024-09-22' },
    // Add more entries here as needed
];

const KeyExchangeTable: React.FC = () => {
    return (
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
                        <Table.ColumnHeaderCell>Repassou</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Recebeu</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Horário</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.RowHeaderCell>Laboratório 01</Table.RowHeaderCell>
                        <Table.Cell>Secretaria</Table.Cell>
                        <Table.Cell>Marina Santos Oliveira</Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>25/08/2024</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Laboratório 01</Table.RowHeaderCell>
                        <Table.Cell>Secretaria</Table.Cell>
                        <Table.Cell>Marina Santos Oliveira</Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>25/08/2024</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Laboratório 01</Table.RowHeaderCell>
                        <Table.Cell>Secretaria</Table.Cell>
                        <Table.Cell>Marina Santos Oliveira</Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>25/08/2024</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Laboratório 01</Table.RowHeaderCell>
                        <Table.Cell>Secretaria</Table.Cell>
                        <Table.Cell>Marina Santos Oliveira</Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>25/08/2024</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Laboratório 01</Table.RowHeaderCell>
                        <Table.Cell>Secretaria</Table.Cell>
                        <Table.Cell>Marina Santos Oliveira</Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>25/08/2024</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Box>
    );
};

export default KeyExchangeTable;
