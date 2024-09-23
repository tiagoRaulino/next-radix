import { Card, Flex, Text } from "@radix-ui/themes"


const ModalContent1 = () => {
    return (
        <Flex justify="center" gap="1em">
            <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                <Text weight={"bold"}>scannear qrcode</Text>
            </Card>
            <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                <Text weight={"bold"}>pesquisar nome</Text>
            </Card>
        </Flex>
    )
}

export default ModalContent1

