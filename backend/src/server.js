import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";

const PORT = process.env.PORT || 4000;

const typeDefs = `
  type Query{
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hi there : )"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(logger("dev"));

createConnection(connectionOptions)
  .then(() => {
    server.start({ port: PORT }, () => {
      console.log(`😝 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => console.log(error));
