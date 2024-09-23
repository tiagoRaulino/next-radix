'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Button, Box, Text, IconButton, ButtonProps } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';

interface MyModalProps {
    buttonLabel: string;
    children: ReactNode;
    title: string;
    buttonProps?: ButtonProps;
    icon?: ReactNode;
}

function MyModal({ buttonLabel, children, title, buttonProps, icon }: MyModalProps) {
    return (
        <Box>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button {...buttonProps}>
                        {buttonLabel}
                        {icon && <span>{icon}</span>}
                    </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 w-[90vw] max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-[#18191B] border border-[#3B3D41] text-neutral-100"
                    >
                        <Box className="border-b border-[#3B3D41] px-2 py-1">
                            <Box className="flex justify-between items-start">
                                <Text className='font-semibold'>
                                    {title}
                                </Text>
                                <Dialog.Close asChild>
                                    <IconButton className='mt-1'>
                                        <Cross2Icon width="18" height="18" />
                                    </IconButton>
                                </Dialog.Close>
                            </Box>
                        </Box>
                        <Box className="px-4 py-10">
                            {children}
                        </Box>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </Box>
    );
}

export default MyModal;
