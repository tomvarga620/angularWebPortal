import { Login, Logout } from './loginAuth.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserServerService } from '../service.user-server/user-server.service';
import { tap } from 'rxjs/operators';

export interface LoginAuthModel {
    username: string;
    token: string;
    privilage: boolean;
}

@State<LoginAuthModel>({
    name: 'login',
    defaults: {
        username: null,
        token: null,
        privilage: false
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

    @Selector()
    static privilage(current: LoginAuthModel) {
        return current.privilage;
    }

    constructor(private userServerService: UserServerService) {}

    @Action(Login)
    login(ctx: StateContext<LoginAuthModel>, action: Login) {
        return this.userServerService.login(action.loginAuth).pipe(
            tap(obj => {
                ctx.setState({
                    username: obj.username,
                    token: obj.token,
                    privilage: obj.privilage
                });
            })
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<LoginAuthModel>, action: Logout) {
        return this.userServerService.logout()
        .pipe(
            tap(() => {
                ctx.setState({
                    username: null,
                    token: null,
                    privilage: null
                });
            })
        );
    }
}
