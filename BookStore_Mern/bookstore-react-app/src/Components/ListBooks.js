import { useEffect } from 'react';
import BookService from '../Services/BookService';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const ListBooks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getBookData = () => {
        BookService.getBook().then((res) => {
            //console.log(res.data);
            dispatch({ type: "books", value: res.data })
        });

    };
    useEffect(() => {
        // UserService.getUser().then((res) => {

        //     //console.log(res.data);
        //     dispatch({ type: "users", value: res.data })
        // });
        getBookData();
    }, []);
    const { books } = useSelector((state) => state);
    //const { email } = useSelector((state) => state);

    //console.log(users)
    // const deleteUserHandler = (id) => {
    //     console.log(id)
    //     UserService.deleteUser(id).then((res) => {
    //         getUserData();
    //     });
    // }
    return (
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>author</th>
                        <th>content</th>
                        <th>summry</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.content}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListBooks;
