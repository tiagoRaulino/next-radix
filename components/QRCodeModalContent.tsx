'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Box, Text } from '@radix-ui/themes';

interface QRCodeModalContentProps {
    profileId: number;
}

const QRCodeModalContent: React.FC<QRCodeModalContentProps> = ({ profileId }) => {
    const qrCodeUrl = `https://example.com/profile/${profileId}`;

    return (
        <Box className="flex flex-col items-center justify-center p-4">
            <QRCodeSVG value={qrCodeUrl} size={256} level="H" />
            <Text as="p" size="2" className="mt-4">
                Este qr code identifica identifica seu perfil para as trocas de chave 
            </Text>
        </Box>
    );
};

export default QRCodeModalContent;
