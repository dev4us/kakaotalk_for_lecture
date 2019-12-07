export const typeDefs = ["type Message {\n  id: Int!\n  text: String\n  sendTo: User\n  sendBy: User\n  createdAt: String!\n}\n\ntype Query {\n  message: Message\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  username: String!\n  profilePhoto: String\n  friends: [User]\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, password: String!, username: String!): SignUpResponse!\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n"];
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
  SignIn: SignInResponse;
  SignUp: SignUpResponse;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  email: string;
  password: string;
  username: string;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
