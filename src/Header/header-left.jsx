import { Link } from "react-router-dom";

function Menu_Left() {
    return ( <>
    <div className="left-side-menu">

<div className="slimscroll-menu">

    <div id="sidebar-menu">

        <ul className="metismenu" id="side-menu">

            <li >
                <Link to="/" className="home-title">Trang chủ</Link>
            </li>
            <li className="menu-title">Phòng Khảo Thí</li>
            
            <li>
                <Link to='/Khaothi_QLLH'>
                    <i className="la la-cube"></i>
                    <span> Quản lý lớp học </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLPT">
                    <i className="la la-clone"></i>
                    <span> Quản lý phòng thi </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLLT">
                    <i className="la la-envelope"></i>
                    <span> Quản lý lịch thi </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLDT">
                    <i className="la la-envelope"></i>
                    <span> Quản lý đề thi </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLDSSV">
                    <i className="la la-envelope"></i>
                    <span> QLDS sinh viên dự thi </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLDSNGT">
                    <i className="la la-envelope"></i>
                    <span> QLDS người gác thi </span>
                </Link>
            </li>

            <li>
                <Link to="/Khaothi_QLDiem">
                    <i className="la la-envelope"></i>
                    <span> Quản lý điểm </span>
                </Link>
            </li>

            <li className="menu-title mt-2">Cán Bộ Coi Thi</li>

            <li>
                <Link to="/CB_QLDSPT&LT">
                    <i className="la la-briefcase"></i>
                    <span> DS phòng thi & lịch thi </span>
                </Link>
            </li>

            <li>
                <Link to="/CB_DLDSSVDT">
                    <i className="la la-coffee"></i>
                    <span> DS sinh viên dự thi </span>
                </Link>
            </li>

            <li className="menu-title mt-2">Giảng Viên</li>

            <li>
                <Link to="/GV_QLDT">
                    <i className="la la-table"></i>
                    <span> Quản lý đề thi </span>
                </Link>
            </li>

            <li>
                <Link to="/GV_DSDiem&BT">
                    <i className="la la-bar-chart"></i>
                    <span> QLDS điểm & bài thi </span>
                </Link>
            </li>

            <li>
                <Link to="/GV_Lap">
                    <i className="la la-bar-chart"></i>
                    <span> Lập & QL Lịch Thi </span>
                </Link>
            </li>

            <li className="menu-title mt-2">Admin</li>

            <li>
                <Link to="/AD_QLTK">
                    <i className="la la-plus-square-o"></i>
                    <span>Quản lý tài khoản</span>
                </Link>
               
            </li>
        </ul>

    </div>

    <div className="clearfix"></div>

</div>

</div>
    </> );
}

export default Menu_Left;