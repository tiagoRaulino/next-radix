export async function fetchRoomData() {
    try {
        const response = await fetch('https://portuno-api.vercel.app/classrooms');
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching room data:', error);
        return [];
    }
}
