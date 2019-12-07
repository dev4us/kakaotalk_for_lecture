import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import bcrypt from "bcrypt";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  email: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "text", nullable: false })
  username: string;

  @Column({ type: "text", nullable: true })
  profilePhoto: string;

  @OneToMany(
    type => User,
    user => user.friends
  )
  friends: User[];

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
