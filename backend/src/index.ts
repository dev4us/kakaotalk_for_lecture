import server from "./server";
import { Options } from "graphql-yoga";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "graphql";

const serverOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleStart = () => {
  console.log(`Listening on Port ${PORT}`);
};

server.start(serverOptions, handleStart);
