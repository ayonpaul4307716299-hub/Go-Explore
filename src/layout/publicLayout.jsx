import { Outlet } from "react-router";
import Navber from "../component/common/Navber"
import Footer from "../component/Footer"

const PublicLayout =()=>{

    return(
        <div>
            <Navber/>

        <Outlet/>

           <Footer/>
        </div>
    );
};
export default PublicLayout;