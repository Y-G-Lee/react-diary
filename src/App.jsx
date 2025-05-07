import "./App.css";
import logo from "./assets/logo.png";
import Home from "./pages/Home/Home"; // Home 컴포넌트 임포트. 이후 <Home />로 사용가능
import Lotto from "./pages/Lotto/Lotto"; // Lotto 컴포넌트
import Post from "./pages/Post/Post"; // Post 컴포넌트
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* 네비게이션 파트 */}
      <div className="navigation">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="menu-box">
          <Link className="menu" to="/post">
            감성포스트
          </Link>
          <Link className="menu" to="/lotto">
            감성로또
          </Link>
        </div>
      </div>

      {/* 페이지 요청 주소에 따라 컴포넌트가 교체될 영역 (= 라우팅 영역) */}
      <Routes>
      {/* Home 컴포넌트 넣기 */}
      {/* Home.jsx의 return에 해당하는 JSX코드가 이곳에 삽입됨 */}
        <Route path="/" element={<Home />} />
        {/* 주소가 /일때는 이 자리에 Home 컴포넌트가 삽입, /lotto일때는 Lotto컴포넌트가 삽입 */}
        <Route path="/lotto" element={<Lotto />} />

        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
