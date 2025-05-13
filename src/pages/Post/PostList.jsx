import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Context로 공유한 데이터 불러오기
// 1. 생성한 ContextPost 불러오기
import { ContextPost } from "./postContext";
// 2. useContext 불러오기
import { useContext } from "react";
import { useState, useEffect } from "react";

function PostList() {
  const navigate = useNavigate();
  // 3. useContext 안에 불러온 Context 넣기
  const {postArray, setPostArray} = useContext(ContextPost);

  // 오름차순, 내림차순에 대한 상태관리
  const [isDesc, setIsDesc] = useState(true);

  // isDesc가 바뀔때마다 postArray를 정렬한 후 setPostArray에 넣기 (화면에 반영)
  // useEffect 사용
  useEffect(() => {
    // isDesc가 true면 내림차순 정렬
    if(isDesc) {
      postArray.sort((a, b) => b.no - a.no);
    }else {
      postArray.sort((a, b) => a.no - b.no);
    }

    setPostArray([...postArray]);
  }, [isDesc]);  // 배열 내 isDesc가 변할때마다 내부 익명함수가 실행

  return (
    <div className="post-container">
      <div className="text-align-end">
        {/* 클릭할때마다 isDesc 값을 반전시킨다 */}
        <span onClick={() => setIsDesc(!isDesc)}> 
        {isDesc == true ? "▼" : "▲"}
          최신순 
          </span>
      </div>
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
