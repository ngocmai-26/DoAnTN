function Add_User() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Thêm Tài Khoản</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Form row</h4>

                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputUsername"
                            className="col-form-label"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail4"
                            className="col-form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputPassword4"
                            className="col-form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputPassword5"
                            className="col-form-label"
                          >
                            Nhập lại Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="Nhập lại Password"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputState"
                            className="col-form-label"
                          >
                            Chức vụ
                          </label>
                          <select id="inputState" className="form-control">
                            <option>---chọn---</option>
                            <option>Khảo thí</option>
                            <option>Giảng viên</option>
                            <option>Cán bộ coi thi</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Thêm tài khoản
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_User;
