import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddEntry from '../AddEntry/AddEntry';
import Journal from '../Journal/Journal';
import ListBook from '../ListBook/ListBook';
import ListMovie from '../ListMovie/ListMovie';
import ListTelevision from '../ListTelevision/ListTelevision';
import ListPodcast from '../ListPodcast/ListPodcast';
import EditEntry from '../EditEntry/EditEntry';
import NavDrawer from '../NavDrawer/NavDrawer';
import useQueue from '../useQueue/useQueue';

import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Nothing You Could Do"
    },
    h2: {
      fontFamily: "Nothing You Could Do" 
    },
    h3: {
      fontFamily: "Nothing You Could Do"
    },
    h4: {
      fontFamily: "Nothing You Could Do"
    },
    h5: {
      fontFamily: "Nothing You Could Do"
    },
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        {/* <Nav /> */}
        <NavDrawer />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AddEntry else shows LoginPage
            exact
            path="/add"
          >
            <AddEntry />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Journal else shows LoginPage
            exact
            path="/journal"
          >
            <Journal />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Dashboard else shows LoginPage
            exact
            path="/listbook"
          >
            <ListBook />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Dashboard else shows LoginPage
            exact
            path="/listmovie"
          >
            <ListMovie />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Dashboard else shows LoginPage
            exact
            path="/listtelevision"
          >
            <ListTelevision />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Dashboard else shows LoginPage
            exact
            path="/listpodcast"
          >
            <ListPodcast />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Dashboard else shows LoginPage
            exact
            path="/editentry/:id"
          >
            <EditEntry />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
