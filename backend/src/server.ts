import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { Response, NextFunction } from "express";
import decodeJWT from "./utils/decodeJWT";

class Server {
  public server: GraphQLServer;
  constructor() {
    this.server = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request
        };
      }
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.server.express.use(cors());
    this.server.express.use(helmet());
    this.server.express.use(morgan("dev"));
    this.server.express.use(this.jwt);
  };
  private jwt = async (
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.get("JWT-TOKEN");
    console.log(token);

    if (token) {
      const user = await decodeJWT(token);

      if (user) {
        req.user = user;
      } else {
        req.user = undefined;
      }
    }
    next();
  };
}

export default new Server().server;
