import React from "react"
import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout=(props)=>{
    return(
        <div style={{margin: `3rem auto`, maxWidth: 600}}>
            <Sidebar />
                {props.children}
            <Footer />
        </div>
    )
}
export default Layout;