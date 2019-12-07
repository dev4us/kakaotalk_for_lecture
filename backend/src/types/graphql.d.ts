export const typeDefs = ["type Message {\n  id: Int!\n  text: String\n  sendTo: User\n  sendBy: User\n  createdAt: String!\n}\n\ntype Query {\n  message: Message\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  username: String!\n  profilePhoto: String\n  friends: [User]\n}\n"];
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
