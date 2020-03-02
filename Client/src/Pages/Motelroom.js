import React, {Fragment} from "../../node_modules/@types/react";
import CTA from "../Component/CTA";
import Search from "../Component/Search";
import Contentroom from "../Component/Contentroom";
import Footer from "../Component/Footer";

function Motelroom(){
    return(
        <Fragment>
            <div className="container">
                <CTA></CTA>
                <Search></Search>
                <Contentroom></Contentroom>
            </div>
            <Footer></Footer>
        </Fragment>
    )
};
export default Motelroom;