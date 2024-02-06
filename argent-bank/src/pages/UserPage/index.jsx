import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions.jsx';

import Account from '../../components/Account';
import AccountCardData from '../../data/AccountCardData.json';
import User from '../../components/User';

import '../../style/index.css';

function UserProfile () {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    /* Fonction asynchrone qui récupère les données utilisateur et les met à jour avec useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        /* Vérifier que la réponse à la requête est bien récupérée */
                        console.log(data) 
                        
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                        }
                        /* Renvoie les données utilisateur dans le state redux */
                        dispatch(getUserProfile(userData));
                    } else {
                        console.log("erreur de récupération des données");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                {/* Renvoyer le composant utilisateur */}
                < User />
                {/* Renvoie les éléments du fichier json avec la carte */}
                {AccountCardData.map((data) => (
                    /* Retourne le composant account */
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default UserProfile