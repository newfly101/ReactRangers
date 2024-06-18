import {observable} from 'mobx';

export const State = {
    Authenticated: 'Authenticated',
    NotAuthenticated: 'NotAuthenticated',
    Pending: 'Pending',
    Failed: 'Failed',
}

const EmptyLogin = {
    id: '',
    password: ''
}

const EmptyUser = {
    id: '',
    name: '',
    type: '',
    createdDatetime: '',
    updatedDatetime: '',
}

const AuthStore = observable({
    // state
    login : Object.assign({}, EmptyLogin),
    loginState: State.NotAuthenticated,
    loginToken : '',
    loginUser : Object.assign({}, EmptyUser),
    checkLogin() {
      console.log('Check Login');
    },
});

export default AuthStore;