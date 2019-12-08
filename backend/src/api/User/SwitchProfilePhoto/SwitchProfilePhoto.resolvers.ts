import { Resolvers } from "src/types/resolvers";
import privateResolver from "../../../../src/utils/resolverMiddleware";
import {
  SwitchProfilePhotoMutationArgs,
  SwitchProfilePhotoResponse
} from "src/types/graphql";
import User from "src/entities/User";

const resolvers: Resolvers = {
  Mutation: {
    SwitchProfilePhoto: privateResolver(
      async (
        _,
        args: SwitchProfilePhotoMutationArgs,
        { req }
      ): Promise<SwitchProfilePhotoResponse> => {
        const user: User = req.user;
        const { profilePhoto } = args;

        user.profilePhoto = profilePhoto;
        await user.save();

        return {
          ok: true,
          error: null
        };
      }
    )
  }
};

export default resolvers;
