function Upload_DT() {
    return ( 
        <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Upload Đề Thi</h4>
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
                      <div className="form-group mb-3 col-lg-6 col-sm-12">
                              <label htmlFor="simpleinput">Mã môn</label>
                              <input
                                type="text"
                                id="simpleinput"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-3  col-lg-6 col-sm-12">
                              <label htmlFor="simpleinput">Mã lớp</label>
                              <input
                                type="text"
                                id="simpleinput"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-3  col-lg-6 col-sm-12">
                              <label htmlFor="simpleinput">Mã giảng viên</label>
                              <input
                                type="text"
                                id="simpleinput"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-3  col-lg-6 col-sm-12">
                              <label htmlFor="example-fileinput">
                                Chọn file upload
                              </label>
                              <input
                                type="file"
                                id="example-fileinput"
                                className="form-control-file"
                              />
                            </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Upload danh sách
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

export default Upload_DT;