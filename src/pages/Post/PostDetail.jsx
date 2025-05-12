import { useSearchParams } from "react-router-dom";
import { ContextPost } from "./postContext";
import { useContext } from "react";
import "./PostDetail.css";
import { useNavigate } from "react-router-dom";

function PostDetail() {

    // queryString으로 넘어온 파라미터 no 꺼내기
    // 1. useSearchParams 임포트
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get("no"));

    // get 으로 파라미터에 담긴 값 꺼내기
    const no = searchParams.get("no");

    const {postArray} = useContext(ContextPost);

    // postArray 내 JSON 객체 중 no가 23123인 객체 찾기
    let post;
    postArray.forEach((data) => {
        if(data.no == no) {
            post = data;
        }
    });
    console.log(post);

    const navigate = useNavigate();

    return (
        <div className="detail-container">
            <h1 className="detail-title"> {post.title} </h1>
            <div className="detail-content"> {post.content} </div>
            <div className="text-align-end">
                <button className="btn-empty" onClick={() => navigate("/post")}> 목록 </button>
                <button className="btn-fill" onClick={() => navigate(`/post/edit/${no}`)}> 수정 </button>
            </div>
        </div>
    );
}

export default PostDetail;