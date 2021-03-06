import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinColumn,
  Column,
} from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';

import Post from './Post';
import Comment from './Comment';
import User from './User';
import Friendship from './Friendship';
import Chat from './Chat';
import Message from './Message';

@Entity()
@ObjectType()
class Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  phoneNumber: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  country: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  city: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  relationship: string;

  @OneToOne(() => User, (user) => user.profile, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  @Field(() => User)
  user: User;

  @OneToMany(() => Post, (post) => post.author, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Post], { nullable: true })
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.author, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Comment], { nullable: true })
  comments: Comment[];

  @ManyToMany(() => Post, (post) => post.likedBy, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Post], { nullable: true })
  likedPosts: Post[];

  @ManyToMany(() => Post, (post) => post.dislikedBy, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Post], { nullable: true })
  dislikedPosts: Post[];

  @ManyToMany(() => Comment, (comment) => comment.likedBy, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Comment], { nullable: true })
  likedComments: Comment[];

  @ManyToMany(() => Comment, (comment) => comment.dislikedBy, {
    cascade: ['insert', 'update'],
  })
  @Field(() => [Comment], { nullable: true })
  dislikedComments: Comment[];

  @OneToMany(() => Friendship, (friendship) => friendship.requestedBy, {
    cascade: ['insert', 'update'],
  })
  requestedFriendships: Friendship[];

  @OneToMany(() => Friendship, (friendship) => friendship.addressedTo, {
    cascade: ['insert', 'update'],
  })
  receivedFriendships: Friendship[];

  @ManyToMany(() => Chat, (chat) => chat.members, {
    cascade: ['insert', 'update'],
    nullable: true,
  })
  @Field(() => [Chat], { nullable: true })
  chats: Chat[];

  @OneToMany(() => Message, (message) => message.author, {
    cascade: ['insert', 'update'],
    nullable: true,
  })
  @Field(() => [Message], { nullable: true })
  messages: Message[];

  @ManyToMany(() => Message, (message) => message.readBy, {
    cascade: ['insert', 'update'],
  })
  readMessages: Message[];
}

export default Profile;
