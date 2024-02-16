export const constants ={
    CURRENT_TOKEN: 'CURRENT_TOKEN',
}

const apiurl = 'http://localhost:4200/api';

export const apiEndpoint ={
    AuthEndpoint: {
        login : `${apiurl}/auth/login`,
        logout : `${apiurl}/auth/logout`,
        loggedUser : `${apiurl}/auth/user`,
    },
    TodoEndpoint: {
        getAllTodos : `${apiurl}/todos`,
        addTodo : `${apiurl}/todos`,
        updateTodo : `${apiurl}/todos`,

    }
};