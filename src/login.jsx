function Login() {
    return ( <>
    <div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">

                            <div className="card-body p-4">
                                
                                <div className="text-center w-75 m-auto">

                                    <p className="text-muted mb-4 mt-3">Enter your email address and password to access admin panel.</p>
                                </div>

                                <h5 className="auth-title">Sign In</h5>

                                <form action="#">

                                    <div className="form-group mb-3">
                                        <label htmlFor="emailaddress">Tên Đăng nhập</label>
                                        <input className="form-control" type="text" id="usernameaddress" required="" placeholder="Enter your username" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control" type="password" required="" id="password" placeholder="Enter your password" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <div className="custom-control custom-checkbox checkbox-info">
                                            <input type="checkbox" className="custom-control-input" id="checkbox-signin" />
                                            <label className="custom-control-label" htmlFor="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-center">
                                        <button className="btn btn-danger btn-block" type="submit"> Log In </button>
                                    </div>

                                </form>

                            </div> 
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p> <a href="pages-recoverpw.html" className="text-muted ml-1">Forgot your password?</a></p>
                            </div> 
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    </> );
}

export default Login;