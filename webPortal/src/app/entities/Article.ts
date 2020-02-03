export class Article {
    constructor(
        public category?: string,
        public title?: string,
        public date?: string,
        public imgUrl?: string,
        public author?: string,
        public description?: string,
        public content?: string,
        public id?: number) {}
}