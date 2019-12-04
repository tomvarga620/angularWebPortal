import { Login } from './loginAuth.actions';
import { State, Action, StateContext } from '@ngxs/store';

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
    @Action(Login)
    login(ctx: StateContext<LoginAuthModel>, action: Login) {
        ctx.setState({
            username: action.loginAuth.username,
            token: Math.floor(Math.random() * 100000) + ''
        });
    }
}
