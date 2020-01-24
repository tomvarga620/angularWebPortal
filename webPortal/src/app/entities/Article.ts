export class Article {
    constructor(
        public id: number,
        public category: string,
        public title: string,
        public date: string,
        //public imgUrl: string,
        public author: string,
        public deescription: string,
        public content: string) {}
}