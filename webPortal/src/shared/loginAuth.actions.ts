import { LoginAuth } from '../app/entities/loginAuth';

export class Login {
    static readonly type = '[Login page] login';
    constructor(public loginAuth: LoginAuth ) {}
}

export class Logout {
    static readonly type = '[Navbar component] logout';
}
