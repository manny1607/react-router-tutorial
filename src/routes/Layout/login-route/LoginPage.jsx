import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function LoginPage() {
    let navigate = useNavigate();
    let auth = useAuth();
    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get('username');

        auth.signin(username, () => {
            navigate('/protected');
        });
    }
    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}