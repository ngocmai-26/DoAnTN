function Add_PhongThi() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Thêm Phòng Thi</h4>
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
                            Mã Phòng
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-row form-group col-md-6">
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputState"
                            className="col-form-label"
                          >
                            Tình trạng phòng
                          </label>
                          <select id="inputState" className="form-control">
                            <option>---chọn---</option>
                            <option>Còn trống</option>
                            <option>Đã có lớp</option>
                          </select>
                        </div>
                      </div>
                      </div>

                     

                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Thêm phòng thi
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

export default Add_PhongThi;
