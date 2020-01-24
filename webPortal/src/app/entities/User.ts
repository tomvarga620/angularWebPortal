export class User {
  static clone: any;
    public constructor(
        public username: string = '' ,
        public email: string = '',
        public password: string = '',
        public privilage?: boolean
    ) {}
}
