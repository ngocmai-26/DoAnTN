function Them_LTGV() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Thêm Lịch Thi</h4>
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
                            htmlFor="inputMaLichThi"
                            className="col-form-label"
                          >
                            Mã lịch thi
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputMaLichThi"
                            placeholder="Mã lịch thi"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputMMT" className="col-form-label">
                            Mã môn thi
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputMMT"
                            placeholder="Mã môn thi"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputTenmonhoc"
                            className="col-form-label"
                          >
                            Tên môn hoc
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputTenmonhoc"
                            placeholder="Tên môn học"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputMLT" className="col-form-label">
                            Mã lớp thi
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputMLT"
                            placeholder="Mã lớp"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Ngày thi</label>
                          <input
                            type="text"
                            className="form-control"
                            data-toggle="input-mask"
                            data-mask-format="00/00/0000"
                          />
                          <span className="font-13 text-muted">
                            e.g "DD/MM/YYYY"
                          </span>
                        </div>
                        <div className="form-group  col-md-6">
                          <label>Thời gian bắt đầu</label>
                          <div className="input-group clockpicker">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Thời gian bắt đầu"
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="mdi mdi-clock-outline"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputTGLB" className="col-form-label">
                            Thời gian làm bài
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputTGLB"
                            placeholder="Thời gian làm bài"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputState"
                            className="col-form-label"
                          >
                            Hình thức thi
                          </label>
                          <select id="inputState" className="form-control">
                            <option>---chọn---</option>
                            <option>Trực tiếp</option>
                            <option>Online</option>
                            <option>Nộp bài tiểu luận</option>
                          </select>
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

export default Them_LTGV;
