import { Login, Logout } from './loginAuth.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserServerService } from '../service.user-server/user-server.service';

export interface LoginAuthModel {
    username: string;
    token: string;
}

@State<LoginAuthModel>({
    name: 'login',
    defaults: {
        username: null,
        token: null
    }
})

export class LoginAuthState {

    @Selector()
    static username(current: LoginAuthModel) {
        return current.username;
    }


    @Action(Login)
    login(ctx: StateContext<LoginAuthModel>, action: Login) {
        ctx.setState({
            username: action.loginAuth.username,
            token: Math.floor(Math.random() * 100000) + ''
        });
    }

    constructor(private userServerService: UserServerService) {}

    @Action(Logout)
    logout(ctx: StateContext<LoginAuthModel>, action: Logout) {
        ctx.setState({
            username: null,
            token: null
        });
    }

}
