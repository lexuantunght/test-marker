import { AnswerItemEntity } from './AnswerItemEntity';

export interface MarkedTestEntity {
    _id: string;
    structure_id: string;
    name?: string;
    note?: string;
    answers: Array<AnswerItemEntity>;
    marked_time: number;
}
