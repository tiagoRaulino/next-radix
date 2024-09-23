export async function fetchProfileData() {
    try {
        const response = await fetch('https://portuno-api.vercel.app/users');
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return [];
    }
}