import { Books } from './books';


export class Users { // Book Renter
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public returnDate: string,
        public issuedDate: string,
        public books: Books[]
    ) {}

}
