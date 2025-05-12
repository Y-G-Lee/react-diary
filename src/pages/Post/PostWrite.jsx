import "./PostWrite.css";
import { useState, useContext } from "react";
import { ContextPost } from "./postContext";
import { useNavigate } from "react-router-dom";
import { getDate } from "../../common/common";
import { getNextNo } from "./PostData";

function PostWrite() {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    // context에 담겨있는 postArray, setPostArray 모두 꺼냄
    const {postArray,setPostArray} = useContext(ContextPost);
    const navigate = useNavigate();

    const writeDo = () => {
        const temp = {};
        temp.no = getNextNo(postArray);
        temp.title = title;
        temp.contnet = content;
        temp.date = getDate();

        postArray.push(temp);
        
        // 라우터애 의해 페이지가 바뀌면 postArray가 변하지만
        // 일반적으로 useState으로 관리중인 postArray에 대해 수정하는 ruddn
        setPostArray([...postArray]);

        navigate("/post");
    }

    return (
        <div className="write-container">
            <input className="write-title" type="text" onChange={(e) => setTitle(e.target.value)} />
            <textarea className="write-content" onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="text-align-end">
                <button className="btn-empty" onClick={() => navigate("/post")}> 취소 </button>
                <button className="btn-fill" onClick={writeDo}> 등록 </button>
            </div>
        </div>
    );
}

export default PostWrite;