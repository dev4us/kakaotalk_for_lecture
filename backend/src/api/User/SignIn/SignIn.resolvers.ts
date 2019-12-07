import { Resolvers } from "src/types/resolvers";
import { SignInResponse, SignInMutationArgs } from "src/types/graphql";
import User from "../../../../src/entities/User";
import createJWT from "../../../../src/utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    SignIn: async (_, args: SignInMutationArgs): Promise<SignInResponse> => {
      const { email, password } = args;

      try {
        const user = await User.findOne({ email });

        if (!user) {
          return {
            ok: false,
            error: "존재하지 않는 계정입니다.",
            token: null
          };
        }

        const isPassword = await user.comparePassword(password);

        if (isPassword) {
          const token = createJWT(user.id);

          return {
            ok: true,
            error: null,
            token
          };
        } else {
          return {
            ok: false,
            error: "비밀번호가 일치하지 않습니다.",
            token: null
          };
        }
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
