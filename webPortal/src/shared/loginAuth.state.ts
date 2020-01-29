import { Login, Logout } from './loginAuth.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserServerService } from '../service.user-server/user-server.service';
import { tap } from 'rxjs/operators';

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

    @Selector()
    static token(current: LoginAuthModel) {
        return current.token;
    }

    constructor(private userServerService: UserServerService) {}

    @Action(Login)
    login(ctx: StateContext<LoginAuthModel>, action: Login) {
        return this.userServerService.login(action.loginAuth).pipe(
            tap(token => {
                ctx.setState({
                    username: action.loginAuth.username,
                    token
                });
            })
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<LoginAuthModel>, action: Logout) {
        return this.userServerService.logout(ctx.getState().username,ctx.getState().token)
        .pipe(
            tap(() => {
                ctx.setState({
                    username: null,
                    token: null
                });
            })
        )
    }
}
