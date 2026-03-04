export const fetchFromAPI = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(
                `Failed to fetch data: ${response.status} ${response.statusText}`,
            )
        }

        const data = await response.json()

        // Validate the response structure
        if (!data) {
            throw new Error('Invalid data')
        }

        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
