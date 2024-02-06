import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName, updateFirstName, updateLastName } from "../../actions/userActions";
import "../../style/main.css";

function User () {
  /* Updates user data on profile page from state redux */
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.user.userData);
  /* Manages the appearance of the username modification form */
  const [display, setDisplay] = useState(true);
  /* Get username */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  /* Handle error message */
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();


  /* Asynchronous username update function */
  const handleSubmitUsername = async (event) => {
      event.preventDefault();
      
      try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({firstName, lastName}),
          });
          if (response.ok) {
            const data = await response.json();
            
           
            /* 
            const updatedFirstName = userData.firstname;
            const updatedLastName = userData.lastname;
            dispatch(updateFirstName(updatedFirstName), updateLastName(updatedLastName));
            */
           
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
      <div className="header">
          { display ? 
              <div>
                  <h2>Welcome back 
                      <br />
                      {userData.firstname} {userData.lastname} !
                  </h2>
                  <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
              </div>
              :
              <div>
                  <h2>Edit user info</h2>
                  <form>
                      <div className="edit-input">
                          <label htmlFor="firstname"></label>
                          <input
                              type="text"
                              id="firstname" 
                              placeholder={userData.firstname}
                              onChange={(e) => setFirstName(e.target.value)}
                          />
                      </div>
                      <div className="edit-input">
                          <label htmlFor="lastname"></label>
                          <input
                              type="text"
                              id="lastname" 
                              placeholder={userData.lastname}
                              onChange={(e) => setLastName(e.target.value)}
                          />

                      </div>
                      <div className="buttons">
                          <button className="edit-username-button" onClick={handleSubmitUsername}>Save</button>
                          <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                      </div>
                      {errorMessage && <p className="error-message">{errorMessage}</p>}
                  </form>
              </div>
          }
      </div>
  )
}

export default User