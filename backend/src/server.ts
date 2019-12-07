import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

class Server {
  public server: GraphQLServer;
  constructor() {
    this.server = new GraphQLServer({});
    this.middlewares();
  }
  private middlewares = (): void => {
    this.server.express.use(cors());
    this.server.express.use(helmet());
    this.server.express.use(morgan("dev"));
  };
}

export default new Server().server;
