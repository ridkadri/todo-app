import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-boost';


const httpLink = createHttpLink({
    uri: 'https://plp0mopxq.sse.codesandbox.io/'
});

const cache = new InMemoryCache();
const client = new ApolloClient({
   link: httpLink,
    cache
});





ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    , document.getElementById('root'));
    


