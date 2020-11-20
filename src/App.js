import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "./components/MenuBar";
import Profile from "./components/Profile";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router basename={"ddrs"}>
      <div className="App">
        <MenuBar />
        <div className={classes.container}>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
