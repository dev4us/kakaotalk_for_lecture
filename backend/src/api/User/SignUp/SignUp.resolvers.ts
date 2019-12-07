import { Resolvers } from "src/types/resolvers";
import { SignUpMutationArgs, SignUpResponse } from "src/types/graphql";
import User from "../../../../src/entities/User";
import encryptToHash from "../../../../src/utils/encryptToHash";
import createJWT from "../../../../src/utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    SignUp: async (_, args: SignUpMutationArgs): Promise<SignUpResponse> => {
      try {
        const { email, password } = args;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return {
            ok: false,
            error: "이미 가입되어 있는 계정입니다.",
            token: null
          };
        }

        args.password = await encryptToHash(password);
        const newUser = await User.create({ ...args }).save();

        const token = createJWT(newUser.id);

        return {
          ok: true,
          error: null,
          token
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
