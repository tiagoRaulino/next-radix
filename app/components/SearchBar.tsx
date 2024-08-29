import React, { ChangeEvent } from 'react';
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface SearchBarProps {
    search: string;
    onChange: (search: string) => void;
    placeholder?: string;
}

function SearchBar({ search, onChange, placeholder }: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <TextField.Root
            type="text"
            value={search}
            onChange={handleChange}
            placeholder={placeholder}>
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
    );
};

export default SearchBar;
