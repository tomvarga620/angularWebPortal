export class User {
  static clone: any;
    public constructor(
        public name: string = '' ,
        public email: string = '',
        public password: string = '',
        public privilage?: boolean,
        public id: number = null
    ) {}
}
