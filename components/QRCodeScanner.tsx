'use client';

import { useEffect, useState, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Box, Text } from '@radix-ui/themes';

interface QRCodeScannerProps {
    onScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
    const [scanError, setScanError] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();

        // Start decoding from the video stream
        codeReader.decodeFromVideoDevice("", videoRef.current!, (result, err) => {
            if (result) {
                onScan(result.getText());
            }
            if (err) {
                setScanError('Error scanning QR code');
                console.error(err);
            }
        });

        // Cleanup function to stop the video stream
        return () => {
            const stream = videoRef.current?.srcObject as MediaStream;
            if (stream) {
                stream.getTracks().forEach(track => track.stop()); // Stop all tracks in the stream
            }
        };
    }, [onScan]);

    return (
        <Box className="flex flex-col items-center justify-center p-4">
            <Text as="p" size="5" className="mb-4">
                Scan the QR Code
            </Text>
            <Box className="w-full max-w-sm">
                <video ref={videoRef} style={{ width: '100%' }} />
            </Box>
            {scanError && (
                <Text as="p" size="2" className="mt-4 text-red-500">
                    {scanError}
                </Text>
            )}
        </Box>
    );
};

export default QRCodeScanner;
