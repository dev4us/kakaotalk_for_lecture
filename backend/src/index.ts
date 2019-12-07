import server from "./server";
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const serverOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleStart = () => {
  console.log(`Listening on Port ${PORT}`);
};

createConnection(connectionOptions)
  .then(() => {
    server.start(serverOptions, handleStart);
  })
  .catch(error => console.log(error));
