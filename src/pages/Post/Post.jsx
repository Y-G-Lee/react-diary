import "./Post.css";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostWrite from "./PostWrite";
import { Routes, Route } from "react-router-dom";

// Post 컴포넌트에서 PostList, PostDetail, PostWrite, PostEdit 화면전환
function Post() {
  return (
    <div>
      {/* Routes로 Post 관련 컴포넌트들 Route 등록 */}
      {/* Post 컴포넌트 진입시 주소 /post 이고, 화면은 PostList 컴포넌트 */}
      <Routes>
        {/* 현재 /는 /post와 같음 */}
        <Route path="/" element={<PostList />} />
        {/* 글쓰기 페이지 /write는 /post/write 와 같음 */}
        <Route path="/write" element={<PostWrite />} />
        {/* Post 관련 화면들은 Post.jsx 내에서 라우팅 */}
        <Route path="/detail" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default Post;
