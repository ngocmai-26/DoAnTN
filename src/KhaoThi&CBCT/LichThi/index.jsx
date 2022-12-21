import { Link } from "react-router-dom";

function List_LichThi() {
    return ( 

        <>
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Danh Sách Lịch Thi</h4>
                  </div>
                </div>
              </div>
  
              <div className="row">
                <div className="col-12">
                  <div className="card-box">
                    <div className="responsive-table-plugin">
                      <div className="table-rep-plugin">
                        <div
                          className="table-responsive"
                          data-pattern="priority-columns"
                        >
                          <div className="add-user">
                            <Link to="/Khaothi_AddLT" className="btn btn-success">
                              Thêm lịch thi
                            </Link>
                          </div>
                          <div className="row search-user">
                            <button className="btn-search">search</button>
                            <input type="text" className="input-search" />
                          </div>
                          <table
                            id="tech-companies-1"
                            className="table table-striped"
                          >
                            <thead>
                              <tr>
                                <th>STT</th>
                                <th>Mã lịch thi</th>
                                <th>Mã môn Thi</th>
                                <th>Têm môn học</th>
                                <th>Mã lớp Thi</th>
                                <th>Ngày Thi</th>
                                <th>Trạng Thái</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>LT01</td>
                                <td>ÌN0062</td>
                                <td>Nhập môn trí tuệ nhân tạo</td>
                                <td>23TH01</td>
                                <td>23/01/2023</td>
                                <td>Chờ duyệt</td>
                                <td className="list_button">
                                  <button className="btn btn-danger ml-1">
                                    Xóa
                                  </button>
                                  <button className="btn btn-warning ml-1">
                                    Cập nhật
                                  </button>
                                  <button className="btn btn-primary ml-1">
                                    Chi tiết
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="pagination">
                            <nav aria-label="...">
                              <ul className="pagination">
                                <li className="page-item disabled">
                                  <a className="page-link" href="#" tabIndex="-1">
                                    <i className="mdi mdi-chevron-left"></i>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item active">
                                  <a className="page-link" href="#">
                                    2 <span className="sr-only">(current)</span>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    <i className="mdi mdi-chevron-right"></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
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

export default List_LichThi;