import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => ID)
  _id: ObjectID;

  @Field()
  name: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
