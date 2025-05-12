import "./PostWrite.css";

function PostWrite() {
    return (
        <div className="write-container">
            <input className="write-box" type="text" />
            <textarea className="content" name="" id=""></textarea>
            <div className="btn-box">
                <button className="cancle-btn"> 취소 </button>
                <button className="commit-btn"> 등록 </button>
            </div>
        </div>
    );
}

export default PostWrite;