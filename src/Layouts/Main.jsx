
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import MyFooter from './MyFooter';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Main;