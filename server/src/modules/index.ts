import Register from './user/mutation/register';
import Login from './user/mutation/login';
import User from './user/query/user';
import CreatePost from './post/mutation/createPost';
import DeletePost from './post/mutation/deletePost';
import UpdatePostContent from './post/mutation/updatePostContent';
import LikePost from './post/mutation/likePost';
import Post from './post/query/post';
import Posts from './post/query/posts';
import ProfilePosts from './post/query/profilePosts';
import CreateComment from './comment/mutation/createComment';
import DeleteComment from './comment/mutation/deleteComment';
import LikeComment from './comment/mutation/likeComment';
import Comment from './comment/query/comment';
import Comments from './comment/query/comments';
import ProfileComments from './comment/query/profileComments';
import Profile from './profile/query/profile';
import Profiles from './profile/query/profiles';
import Friends from './profile/query/friends';
import AllFriends from './profile/fieldResolver/allFriends';
import AcceptedFriends from './profile/fieldResolver/acceptedFriends';
import Feed from './profile/query/feed';
import UpdateProfile from './profile/mutation/UpdateProfile';
import CreateFriendship from './friendship/mutation/createFriendship';
import AcceptFriendship from './friendship/mutation/acceptFriendship';
import DeleteFriendship from './friendship/mutation/deleteFriendship';
import CreateChat from './chat/mutation/createChat';
import DeleteChat from './chat/mutation/deleteChat';
import UpdateChatName from './chat/mutation/updateChatName';
import AddRemoveChatMember from './chat/mutation/addRemoveChatMember';
import Chat from './chat/query/chat';
import CreateMessage from './message/mutation/createMessage';
import DeleteMessage from './message/mutation/deleteMessage';
import MarkAsRead from './message/mutation/markAsRead';
import Message from './message/query/message';
import Messages from './message/query/messages';
import NewMessage from './message/subscription/newMessage';

const resolvers = [
  Register,
  Login,
  User,
  CreatePost,
  DeletePost,
  UpdatePostContent,
  LikePost,
  Post,
  Posts,
  ProfilePosts,
  CreateComment,
  DeleteComment,
  LikeComment,
  Comment,
  Comments,
  ProfileComments,
  Profile,
  Profiles,
  Friends,
  AllFriends,
  AcceptedFriends,
  Feed,
  UpdateProfile,
  CreateFriendship,
  AcceptFriendship,
  DeleteFriendship,
  CreateChat,
  DeleteChat,
  UpdateChatName,
  AddRemoveChatMember,
  Chat,
  CreateMessage,
  DeleteMessage,
  MarkAsRead,
  Message,
  Messages,
  NewMessage,
] as const;

export default resolvers;
