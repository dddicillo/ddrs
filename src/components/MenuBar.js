import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const MenuBar = () => {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();
    const button = isAuthenticated ? <LogoutButton /> : <LoginButton />;

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        align="left"
                        className={classes.title}
                        data-testid="menuTitle"
                    >DDRS</Typography>
                    {button}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MenuBar;