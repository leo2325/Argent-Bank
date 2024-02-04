import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../../actions/authActions.jsx';
import { isValidEmail } from '../../utils/regex.jsx';

export async function loginService(store) {
     /* Permet de récupérer les données saisies par l'utilisateur dans le formulaire */    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [rememberMe, setRememberMe] = useState(false);
     /* Indique un message d'erreur si les données ne sont pas valides */    
     const [errorMessage, setErrorMessage] = useState('');
     const navigate = useNavigate();
     const dispatch = useDispatch();
 
         /* Fonction de formulaire asynchrone */
         const handleSubmit = async (event) => {
         event.preventDefault();
         /* Handle error message */
         if (!isValidEmail(email)) {
             setErrorMessage("Invalid email adress");
             return;
         }
         try {
             const response = await fetch("http://localhost:3001/api/v1/user/login", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify({email, password}),
             });
             if (response.ok) {
                 const data = await response.json();
                 
                 /* Vérifier que la réponse à la requête est bien récupérée  -  console.log(données) */
                 const token = data.body.token;
                 dispatch(loginSuccess(token));
                 sessionStorage.setItem("token", token);
                 if (rememberMe) {
                     localStorage.setItem("token", token);
                 }
                 navigate('/profile');
             } else {
                 const error = "Incorrect email/password"
                 dispatch(loginFailed(error));
             }
         } catch (error) {
             console.error(error);
         }
     }
}