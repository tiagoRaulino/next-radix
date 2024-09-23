import { Button, Card, Flex } from "@radix-ui/themes"


const ModalContent1 = () => {
    return (
        <Flex justify="center" gap="1em">
            <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                <Button>scan qrcode</Button>
            </Card>
            <Card className="px-2 py-10 bg-[#18191B] border border-[#3B3D41] text-neutral-100 rounded-md">
                <Button>pesquisar nome</Button>
            </Card>
        </Flex>
    )
}

export default ModalContent1

