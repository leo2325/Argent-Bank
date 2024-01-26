import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile, updateFirstname, updateLastname } from '../../actions/userActions.jsx';
import { isValidName } from "../../utils/regex.jsx";
import '../../style/main.css';

function User () {

    /* Met à jour les données utilisateur sur la page de profil à partir de State Redux */
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);

    /* Gère l'apparence du formulaire de modification du nom d'utilisateur */
    const [display, setDisplay] = useState(true);

    /* Récupère le prénom d'utilisateur */
     const [firstName, setFirstName] = useState('');
    /* Récupère le nom d'utilisateur */
    const [lastName, setLastName] = useState('');

    /* Handle error message */
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    /* Fonction de mise à jour asynchrone du nom d'utilisateur */
    const handleSubmitNewName = async (event) => {
        event.preventDefault();
        if (!isValidName(userName)) {
            setErrorMessage("Invalid username");
            return;
        } else {
            setErrorMessage("");
        }
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({userName}),
            });
            if (response.ok) {
                const data = await response.json();
                const firstname = data.body.firstName;
                const lastname = data.body.lastName;
                /* Vérifier que la réponse à la requête est bien récupérée  -  console.log(données) */
                dispatch(updateFirstName(firstname));
                dispatch(updateLastName(lastname));
                setDisplay(!display);
            } else {
                console.log("Invalid Fields")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (

        <main className="main bg-dark">

            <div className="header">
            { display ? 
                <div>
                    <h2>Welcome back 
                        <br />
                        {userData.firstName} {userData.lastName} !
                    </h2>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </div>
                :
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
                                    placeholder={userData.firstName}
                                />
                            </div>
                            <div className="edit-input">
                                <label htmlFor="lastname"></label>
                                <input
                                    type="text"
                                    id="lastname" 
                                    defaultValue={userData.lastName}
                                    placeholder={userData.lasttName}
                                />
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="edit-username-button" onClick={handleSubmitNewName}>Save</button>
                            <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    
                    </form>

                </div>
            }
        </div>












            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default User;