import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './containers/Profile';
import Home from './containers/Home';
import Settings from './components/settings/Settings';
import Login from './components/login/Login';
import { withSession } from './containers/auth/withSession';


export const ROUTES  = {
    HOME: {
        path: '/',
        component: withSession(Home),
        linkTo: () => '/'
    },

    PROFILE: {
        path: '/profile',
        component: Profile,
        linkTo: () => '/profile'
    },
    
    Settings: {
        path: '/Settings',
        component: Settings,
        linkTo: () => '/Settings'
    },
    Login: {
        path: '/login',
        component: Login,
        linkTo: () => '/login'
    }
    
};

export const getRoutes = () => {
    return Object.values(ROUTES).map(route => {
        return <Route exact key={route.path} path={route.path} component={route.component} />;
    });
};
