import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUsername } from "../../actions/userActions";
import { isValidName } from "../../utils/regex.jsx";
import "../../style/main.css";

async function getUserProfileData(token) {

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





function User() {
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.user.userData);
  const [display, setDisplay] = useState(true);
  const [userName, updateUserName] = useState('');

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const userProfileData = await getUserProfileData(token);
        dispatch(getUserProfile(userProfileData));
      } catch (error) {
        console.error("Error fetching user profile data:", error);
        setErrorMessage(error.message);
      }
    }
    fetchData();
  }, [dispatch, token]);






  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!isValidName(userName)) {
      setErrorMessage("Invalid username");
      return;
    } else {
      setErrorMessage("");
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });
      if (response.ok) {
        const data = await response.json();
        const updatedUserName = data.body.userName;

        dispatch(updateUsername(updatedUserName));
        setDisplay(!display);
      } else {
        console.log("Invalid Fields");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  }

  console.log("userData:", userData);

  return (
    <main className="main bg-dark">
      <div className="header">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {display ? (
          <div>
            <h2>
              Welcome back <br />
              {userData.firstName} {userData.lastName} !
            </h2>
            <button className="edit-button" onClick={() => setDisplay(!display)}>
              Edit Name
            </button>
          </div>
        ) : (
          <div>
            <h2>Welcome back</h2>
            <form id="editUserForm">
              <div className="edit-inputs">
                <div className="edit-input">
                  <label htmlFor="firstname"></label>
                  <input
                    type="text"
                    id="firstname"
                    defaultValue={userData.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="edit-input">
                  <label htmlFor="lastname"></label>
                  <input
                    type="text"
                    id="lastname"
                    defaultValue={userData.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="buttons">
                <button className="edit-username-button" onClick={handleSubmitUsername}>
                  Save
                </button>
                <button className="edit-username-button" onClick={() => setDisplay(!display)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default User;