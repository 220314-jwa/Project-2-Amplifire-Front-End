import { Book } from './book';

export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public fullName: string,
        public returnDate: string,
        public issuedDate: string,
        public books: Book[]
    ) {}
}
