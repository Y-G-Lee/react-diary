import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Context로 공유한 데이터 불러오기
// 1. 생성한 ContextPost 불러오기
import { ContextPost } from "./postContext";
// 2. useContext 불러오기
import { useContext } from "react";

function PostList() {
  const navigate = useNavigate();
  // 3. useContext 안에 불러온 Context 넣기
  const {postArray} = useContext(ContextPost);

  return (
    <div className="post-container">
      <table className="post-list">
        <thead>
          <tr>
            <th> 번호 </th>
            <th> 제목 </th>
            <th> 날짜 </th>
          </tr>
        </thead>
        <tbody>
          {/* postArray에 데이터가 없으면 '등록된 게시글이 없습니다' 출력 */}
          {
            (postArray.length > 0) ? (postArray.map((data) => (
              <tr key={data.no}>
                <td> {data.no} </td>

                <td>
                  {/* to="" 속성값에 변수값 넣기 */}
                  <Link to={`/post/detail/?no=${data.no}`} > {data.title} </Link>
                </td>
                <td> {data.date} </td>
              </tr>
          ))) : (
            <tr>
              <td colSpan={3}> 등록된 게시글이 없습니다 </td>
            </tr>
          )
          }
        </tbody>
      </table>
      <div className="write-btn-box">
        {/* 글쓰기 버튼 클릭시 /post/write 요청 -> useNavigate 사용 */}
        <button className="btn-fill" onClick={() => navigate("/post/write")}>
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default PostList;
