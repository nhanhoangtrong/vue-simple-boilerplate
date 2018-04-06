import Vue from 'vue';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri: 'https://api.graphcms.com/simple/v1/cjfnfmzvd3m410151qbn61g52',
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV === 'development',
});

export default apolloClient;
