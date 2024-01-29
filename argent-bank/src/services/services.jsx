async function postUserProfile(token) {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: ''
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please check your credentials.");
            } else {
                throw new Error("Failed to retrieve user profile data.");
            }
        }

        const userData = await response.json();
        console.log(userData);
        return userData;

    } catch (error) {
        console.error("Error retrieving user profile data:", error);
        throw error;
    }
}