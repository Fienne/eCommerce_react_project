import "./layout.css"
import Navbar from "../navbar/navbar.components"
import SideBar from "../sidebar/sidebar.component"
import ProductCard from "../productcard/productcard.component"

    const Layout = () => {
        return <div className="layout row">
            <div className="col-12 navbar-skeleton">
                {/*My navbar goes here */}
                <Navbar />
            </div>
            <div className="col-2 sidebar-skeleton">
                {/*My sidebar goes here */}
                <SideBar />
            </div>
            <div className="col-10 main-skeleton">
                {/*My main body goes here */}
                <ProductCard />
            </div>
        </div>
    }
    export default Layout