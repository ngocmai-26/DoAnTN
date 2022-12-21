function Add_GacThi() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Thêm Cán Bộ Gác Thi</h4>
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
                            htmlFor="inputMSNV"
                            className="col-form-label"
                          >
                            MSNV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputMSNV"
                            placeholder="MSNV"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputName"
                            className="col-form-label"
                          >
                            Tên cán bộ coi thi
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputMLT"
                            className="col-form-label"
                          >
                            Mã lịch thi
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputMLT"
                            placeholder="Mã lịch thi"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail"
                            className="col-form-label"
                          >
                            Email cán bộ
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      
                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Thêm
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

export default Add_GacThi;
