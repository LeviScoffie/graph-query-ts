import { GraphQLClient, gql } from 'graphql-request';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const apiKey = process.env.API_KEY;
const subgraphUrl = `https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/4H2juYUDfhWAF4WaEpS3vvXQfFqCY9F9y8SXXUi7QjHJ`;

const client = new GraphQLClient(subgraphUrl);

const query = gql`${fs.readFileSync('src/query.graphql', 'utf8')}`;

async function fetchData() {
  try {
    const data = await client.request(query);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error querying The Graph:', error);
  }
}

fetchData();

