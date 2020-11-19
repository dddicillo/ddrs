import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Profile = () => {
    const { user } = useAuth0();

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default withAuthenticationRequired(Profile);
