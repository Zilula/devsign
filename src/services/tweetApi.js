import store from '../store';
import { getToken } from '../selectors/session';

export const getAllTweets = () =>  {
    return fetch('https://twitterclonebe.herokuapp.com/tweets', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken(store.getState())}`
        }
    })
        .then(res => [res.ok, res.json()])
        .then(([ok, json]) => {
            if(!ok) throw json;
            return json;
        });
};

export const getUserTweets = () => {
    return fetch('https://twitterclonebe.herokuapp.com/tweets', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken(store.getState())}`
        }
    })
        .then(res => [res.ok, res.json()])
        .then(([ok, json]) => {
            if(!ok) throw json;
            return json;
        });
};
