'use client'

import { TextField } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface SearchBarProps {
    data?: string[];
    placeholder?: string;
}

function SearchBar({ data = [''], placeholder }: SearchBarProps) {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearch(value);

        const filtered = data.filter(item => item.toLowerCase().includes(value));
        setFilteredData(filtered);
    };

    return (
        <div>
            <TextField.Root
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder={placeholder}>
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </div>
    )
}

export default SearchBar


