import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';

@ObjectType('Student')
export class StudentType {
  @Field(() => ID)
  _id: ObjectID;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
