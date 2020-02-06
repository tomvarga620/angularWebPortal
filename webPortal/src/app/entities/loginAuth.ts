export class LoginAuth {
    public constructor(
        public username: string = '' ,
        public password?: string,
        public token?: string,
        public privilage: boolean = false
    ) {}
}
