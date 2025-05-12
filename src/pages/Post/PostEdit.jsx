import { useParams } from "react-router-dom";
import { ContextPost } from "./postContext";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostWrite.css";

function PostEdit() {

    // path variable 방식으로 넘어온 파라미터 no값 꺼내기
    // 1. useParams 임포트 후 불러오기
    const params = useParams();
    console.log(params);
    console.log(params.no);

    // 2. params.파라미터명 으로 꺼내기
    const no = params.no;

    // context로 공유중인 postArray 내부 no에 대한 데이터 꺼내기
    let post;
    const {postArray} = useContext(ContextPost);
    postArray.forEach((data) => {
        if(data.no == no) {
            post = data;
        }
    });
    console.log(post);

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const navigate = useNavigate();

    // 등록 버튼 클릭시 실행될 함수
    const editDo = () => {
        post.title = title;
        post.content = content;
        console.log(post);

        // postArray로 부터 꺼낸 post의 내용을 수정시
        // postArray 내부 데이터 변경됨
        console.log(postArray);

        // 포스트 목록으로 이동 (navigate 이용)
        navigate("/post");
    }

    return(
        <div className="write-container">
            {/* input태그나 textarea에 변수값 넣는겨우 defaultValue에 넣기 */}
            <input className="write-title" type="text" defaultValue={post.title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea className="write-content" defaultValue={post.content} onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="text-align-end">
                <button className="btn-empty" onClick={() => navigate(`/post/detail?no=${no}`)}> 취소 </button>
                <button className="btn-fill" onClick={editDo}> 등록 </button>
            </div>
        </div>
    );
}

export default PostEdit;