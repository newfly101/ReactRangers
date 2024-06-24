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

export const AdminUser = {
    id: "ADMIN",
    email: "admin@naver.com",
    password: "1234"
}

const AuthStore = () => {
    return makeAutoObservable({
        // state
        login : Object.assign({}, EmptyLogin),
        loginState: State.NotAuthenticated,
        loginToken : '',
        loginUser : Object.assign({}, EmptyUser),
        loginModal : ModalState.isModalOpen,
        validLoginForm : false,

        // action
        checkLogin() {
            console.log('Check Login');
        },
        changeLoginId() {
            this.login.id = this.login.email.split("@")[0];
        },
        changeLoginEmail(email) {
            this.login.email = email;
        },
        changeLoginPassword(pwd) {
            this.login.password = pwd;
        },
        changeLoginModalState(state) {
            this.loginModal = state;
        },
        handleOnLoginSubmit(event) {
            event.preventDefault();
            if (AdminUser.email === this.login.email) {
                if (AdminUser.password === this.login.password) {
                    this.changeLoginId();
                    window.sessionStorage.setItem("user", JSON.stringify(this.login.id));
                    console.log("로그인 되었습니다.");
                } else {
                    console.error("비밀번호가 틀렸습니다.");
                }
            } else {
                console.error("등록된 계정이 없습니다.");
            }
            // checkEmailValidation(this.login.email, this.login.password);
        }
    });
};

export default AuthStore;