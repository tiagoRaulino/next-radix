export async function fetchTransferKey() {
    try {
        const response = await fetch('http://localhost:5000/transferKeys');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tranferKeys:', error);
        return [];
    }
}
