import { BrowserRouter, Route, Routes } from "react-router-dom";
import List_Users from "./Admin";
import Add_User from "./Admin/add_user";
import List_DTGV from "./Giangvien/DeThi";
import List_DiemGV from "./Giangvien/Diem";
import UPload_Diem from "./Giangvien/Diem/form_upload";
import Menu_Left from "./Header/header-left";
import LopHoc from "./KhaoThi&CBCT/Class";
import Dethi from "./KhaoThi&CBCT/DeThi";
import Upload_DT from "./Giangvien/DeThi/uploadDT";
import DSDiem from "./KhaoThi&CBCT/DSDiem";
import List_GacThi from "./KhaoThi&CBCT/GacThi";
import Add_GacThi from "./KhaoThi&CBCT/GacThi/form_gacthi";
import List_LichThi from "./KhaoThi&CBCT/LichThi";
import Add_LichThi from "./KhaoThi&CBCT/LichThi/form_lichthi";
import DS_PhongThi from "./KhaoThi&CBCT/PhongThi";
import Add_PhongThi from "./KhaoThi&CBCT/PhongThi/form_phongthi";
import List_PTGT from "./KhaoThi&CBCT/PhongThi/phongthi_GT";
import List_DSSV from "./KhaoThi&CBCT/SvDuThi";
import List_FileDSSV from "./KhaoThi&CBCT/SvDuThi/index_gt";
import Upload_ListSV from "./KhaoThi&CBCT/SvDuThi/upload";
import DSLTGV from "./Giangvien/LichThi";
import Them_LTGV from "./Giangvien/LichThi/form_LTGV";
import Login from "./login";
import Header from "./Header";
import Footer from "./footer";

function RouterMenu() {
  return (
    <BrowserRouter>
      <Header />
      <Menu_Left />
      <Routes>
        <Route path="/" />
        <Route path="/Khaothi_QLLH" element={<LopHoc />} />

        <Route path="/Khaothi_QLPT" element={<DS_PhongThi />} />
        <Route path="/Khaothi_AddPT" element={<Add_PhongThi />} />

        <Route path="/Khaothi_AddLT" element={<Add_LichThi />} />
        <Route path="/Khaothi_QLLT" element={<List_LichThi />} />

        <Route path="/Khaothi_QLDT" element={<Dethi />} />

        <Route path="/Khaothi_QLDSSV"element={<List_DSSV />} />
        <Route path="/Khaothi_ULDSSVDT"element={<Upload_ListSV />} />

        <Route path="/Khaothi_AddGT" element={<Add_GacThi />} />
        <Route path="/Khaothi_QLDSNGT" element={<List_GacThi />} />
        
        <Route path="/Khaothi_QLDiem" element={<DSDiem />} />
        <Route path="/CB_QLDSPT&LT" element={<List_PTGT />} />
        <Route path="/CB_DLDSSVDT" element={<List_FileDSSV />} />
        <Route path="/GV_QLDT" element={<List_DTGV />} />
        <Route path="/GV_UPDT" element={<Upload_DT />} />
        <Route path="/GV_DSDiem&BT" element={<List_DiemGV />} />
        <Route path="/GV_ULDiem&BT" element={<UPload_Diem />} />
        <Route path="/GV_Lap&QLLT" element={<DSLTGV />} />
        <Route path="/GV_ULLT" element={<Them_LTGV />} />
        <Route path="/AD_QLTK" element={<List_Users />} />
        <Route path="/AD_AddTK" element={<Add_User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterMenu;
