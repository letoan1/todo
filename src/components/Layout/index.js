import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header';
import RouterTodo from '../routes';
import './Layout.scss';

export default function index() {
    return (
        <>
            <Header />
            <div className="menu">
                <Sidebar />
                <div className="content">
                    <RouterTodo />
                </div>
            </div>
        </>
    );
}
