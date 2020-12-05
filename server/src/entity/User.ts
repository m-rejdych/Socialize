import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';

import Post from './Post';
import Comment from './Comment';

@Entity()
@ObjectType()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  password: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Field()
  fullName(@Root() root: User): string {
    return `${root.firstName} ${root.lastName}`;
  }

  @OneToMany(() => Post, (post) => post.author)
  @Field(() => [Post])
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.author)
  @Field(() => [Comment])
  comments: Comment[];
}

export default User;
