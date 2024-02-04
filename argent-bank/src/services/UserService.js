export async function getUserProfileData(token) { 

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "",
      });
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authentication failed. Please check your credentials.");
        } else {
          throw new Error("Failed to retrieve user profile data.");
        }
      }
      
      const UserData = await response.json();
      const firstName = UserData.body.firstName;
      const lastName = UserData.body.lastName;
  
      console.log("UserData:", UserData);
      console.log(firstName);
      console.log(lastName);
  
      return UserData;
  
  
    } catch (error) {
      console.error("Error retrieving user profile data:", error);
      throw error;
    }
  }