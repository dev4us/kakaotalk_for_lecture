import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  Entity
} from "typeorm";

import User from "./User";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  text: string;

  @OneToOne(
    type => User,
    user => user.id
  )
  sendTo: User;

  @OneToOne(
    type => User,
    user => user.id
  )
  sendBy: User;

  @CreateDateColumn()
  createdAt: string;
}

export default Message;
