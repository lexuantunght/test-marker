import { AnswerItem } from './AnswerItem';

export interface MarkedTest {
    _id: string;
    structure_id: string;
    name?: string;
    note?: string;
    answers: Array<AnswerItem>;
    marked_time: number;
}
