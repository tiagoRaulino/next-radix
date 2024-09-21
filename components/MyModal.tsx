'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Container, Button, Box, Card } from '@radix-ui/themes';

interface MyModalProps {
  buttonLabel: string;
  children: ReactNode;
}

function MyModal({ buttonLabel, children }: MyModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="solid">{buttonLabel}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-[90vw] max-w-[500px] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-neutral-800 text-neutral-100"
        >
          <div className="rounded-lg p-6 bg-neutral-900 shadow-md">
            <Container>
              <Box>{children}</Box>
              <Dialog.Close asChild>
                <Button variant="ghost" className="mt-4 text-neutral-100">
                  Close
                </Button>
              </Dialog.Close>
            </Container>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MyModal;
