export const typeDefs = ["type Message {\n  id: Int!\n  text: String\n  sendTo: User\n  sendBy: User\n  createdAt: String!\n}\n\ntype Query {\n  message: Message\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  username: String!\n  profilePhoto: String\n  friends: [User]\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignUp(email: String!, password: String!, username: String!): SignUpResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  message: Message | null;
  user: User | null;
}

export interface Message {
  id: number;
  text: string | null;
  sendTo: User | null;
  sendBy: User | null;
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  profilePhoto: string | null;
  friends: Array<User> | null;
}

export interface Mutation {
  SignUp: SignUpResponse;
}

export interface SignUpMutationArgs {
  email: string;
  password: string;
  username: string;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
