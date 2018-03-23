import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


const url = process.env.REACT_APP_BASE_URL;

const createClient = () => {    
    console.log('creating client?');
    const httpLink = createHttpLink({
        uri: url,
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });
};

const createAuthClient = (jwtToken) => {

    const httpLink = createHttpLink({
        uri: url,
    });

    const authLink = setContext((_, request) => {
        console.log('​-----------------------------');
        console.log('​authLink -> request', request);
        console.log('​-----------------------------');

        // get the authentication token from local storage if it exists
        console.log(request.headers);
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...request.headers,
                authorization: jwtToken
            }
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

export const LogIn = (dispatch, user) => {
    const { username, password } = user;
    console.log('LOGIN api call! ---------------');

    const query = `
    mutation signIn($input: SignInInput!) {
        signIn(input: $input) {
        authToken
        }
    }`;

    const variables = { input: { username , password } };

    return createClient().mutate({ mutation: gql(query), variables })
        .then( response => {
            console.log('​--------------------------');
            console.log('​exportLogIn -> data',  response);
            console.log('​--------------------------');

            return response.data.signIn;
            
        })
        .catch(err => {
            console.log('​------------------------');
            console.log('​exportLogIn -> err', err);
            console.log(err.response.errors); // GraphQL response errors
            console.log(err.response.data); // Response data if available
            console.log('​------------------------');
            return err;
        });
};

export const getApiKeysData = (dispatch, jwtToken) => {
    const query = `{
        user {
            apiKeys {
                key
                usage
                logs {
                    date
                    status
                    contact
                }
            }
        }
    }`;

    return createAuthClient(jwtToken).query({ query: gql(query) })
        .then((response => {
            console.log('​---------------------------------------');
            console.log('​exportgetApiKeys -> response', response);
            console.log('​---------------------------------------');
            return response.data.user;
        }))
        .catch((err) => {
            console.log('​-----------------------------');
            console.log('​exportgetApiKeys -> err', err);
            console.log('​-----------------------------');
            return err;
        });
};


export const createApiKeyData = (dispatch, jwtToken) => {
    const query = `
    mutation addApiKey {
        addApiKey(input: "") {
        _id
        }
    }`;

    return createAuthClient(jwtToken).mutate({ mutation: gql(query) })
        .then((response => {
            console.log('​---------------------------------------');
            console.log('CREATEAPIKEY -> response', response);
            console.log('​---------------------------------------');
            return response.data.user;
        }))
        .catch((err) => {
            console.log('​-----------------------------');
            console.log('CREATEAPIKEY -> err', err);
            console.log('​-----------------------------');
            return err;
        });
};
