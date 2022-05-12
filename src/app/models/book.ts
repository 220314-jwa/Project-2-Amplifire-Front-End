import { Genre } from './Genre';
import { Status } from './Status';
export class Book {
    constructor(
        public id: number,
        public title: string,
        public genre: Genre,
        public description: string,
        public status: Status
    ) {}


}
