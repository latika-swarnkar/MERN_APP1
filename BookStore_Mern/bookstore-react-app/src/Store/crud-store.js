import { createStore } from 'redux'

const initialState = {
    email: "",
    password: "",
    isLogged: "",
    users: [],
    fullname: "",
    useremail: "",
    userpassword: "",
    userphone: "",
    usergender: "Male",
    title: "",
    author: "",
    summary: "",
    content: "",
    category: ""

};
const crudReducer = (state = initialState, action) => {
    if (action.type === "email")
        return {
            ...state,
            email: action.value,
        }
    if (action.type === "title")
        return {
            ...state,
            title: action.value,
        }
    if (action.type === "category")
        return {
            ...state,
            category: action.value,
        }
    if (action.type === "author")
        return {
            ...state,
            author: action.value,
        }
    if (action.type === "content")
        return {
            ...state,
            content: action.value,
        }
    if (action.type === "summary")
        return {
            ...state,
            summary: action.value,
        }
    if (action.type === "password")
        return {
            ...state,
            password: action.value,
        }
    if (action.type === "logged")
        return {
            ...state,
            isLogged: action.value,
        };
    if (action.type === "users")
        return {
            ...state,
            users: action.value,
        };
    if (action.type === "books")
        return {
            ...state,
            users: action.value,
        };
    if (action.type === "fullname")
        return {
            ...state,
            fullname: action.value,
        };

    if (action.type === "useremail")
        return {
            ...state,
            useremail: action.value,
        };
    if (action.type === "userpassword")
        return {
            ...state,
            userpassword: action.value,
        };
    if (action.type === "userphone")
        return {
            ...state,
            userphone: action.value,
        };
    if (action.type === "usergender")
        return {
            ...state,
            usergender: action.value,
        };
    return state;
};

const crudStore = createStore(crudReducer);

export default crudStore;