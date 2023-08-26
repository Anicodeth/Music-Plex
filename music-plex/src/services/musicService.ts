export const fetchSongs = async (q: string) => {
    try {
        const response = await fetch(`/api/search/${q}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
};