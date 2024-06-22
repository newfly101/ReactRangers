import {makeAutoObservable} from 'mobx';

export const State = {
    Authenticated: 'Authenticated',
    NotAuthenticated: 'NotAuthenticated',
    Pending: 'Pending',
    Failed: 'Failed',
}

export const ModalState = {
    isModalOpen: false,
}

const EmptyLogin = {
    id: '',
    email: '',
    password: ''
}

const EmptyUser = {
    id: '',
    name: '',
    type: '',
    createdDatetime: '',
    updatedDatetime: '',
}

// const AuthStore = observable({
//     // state
//     login : Object.assign({}, EmptyLogin),
//     loginState: State.NotAuthenticated,
//     loginToken : '',
//     loginUser : Object.assign({}, EmptyUser),
//     loginModal : ModalState.isModalOpen,
//
//     // action
//     checkLogin() {
//       console.log('Check Login');
//     },
//     changeLoginId(id) {
//         this.login.id = id;
//     },
//     changeLoginPassword(pwd) {
//         this.login.password = pwd;
//     },
//     changeLoginModalState(state) {
//         this.loginModal = state;
//     }
// });

const AuthStore = () => {
    return makeAutoObservable({
        // state
        login : Object.assign({}, EmptyLogin),
        loginState: State.NotAuthenticated,
        loginToken : '',
        loginUser : Object.assign({}, EmptyUser),
        loginModal : ModalState.isModalOpen,

        // action
        checkLogin() {
            console.log('Check Login');
        },
        changeLoginId(id) {
            this.login.id = id;
        },
        changeLoginPassword(pwd) {
            this.login.password = pwd;
        },
        changeLoginModalState(state) {
            this.loginModal = state;
        }
    });
};

export default AuthStore;