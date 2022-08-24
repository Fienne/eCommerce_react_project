import "./layout.css"

    const Layout = () => {
        return <div className="layout row">
            <div className="col-12 navbar-skeleton">
                {/*My navbar goes here */}
            </div>
            <div className="col-2 sidebar-skeleton">
                {/*My sidebar goes here */}
            </div>
            <div className="col-10 main-skeleton">
                {/*My main body goes here */}
            </div>
        </div>
    }
    export default Layout