import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { ObjectId } from 'mongodb';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>) {}

  async getLesson(id: string): Promise<Lesson> {
    const _id = ObjectId(id);
    return this.lessonRepository.findOne({ _id });
  }

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate
    });
    return this.lessonRepository.save(lesson);
  }
}
