import {action, observable} from 'mobx';

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

});

export default AuthStore;