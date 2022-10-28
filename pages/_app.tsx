import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-pokeapi.graphcdn.app/",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
