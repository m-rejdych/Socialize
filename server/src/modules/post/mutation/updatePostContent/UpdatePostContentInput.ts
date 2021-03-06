import { InputType, Field, ID } from 'type-graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
class UpdatePostContentInput {
  @Field(() => ID)
  @IsUUID(4, { message: 'Invalid ID!' })
  id: string;

  @Field()
  @IsNotEmpty({ message: 'Content can not be empty!' })
  content: string;
}

export default UpdatePostContentInput;
