import axios from "axios"
const USER_BASE_URL = "http://localhost:4500/book"
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

}
class BookService {

    //getuser
    getBook() {
        //console.log(headers);
        return axios.get(USER_BASE_URL, { headers: headers });
    }
    //addbook
    addBook(books) {
        return axios.post(USER_BASE_URL + "/add", books, { headers: headers });
    }
    //post user
    // postUser(users) {
    //     return axios.post(USER_BASE_URL, users, { headers: headers });
    // }
}
export default new BookService();
