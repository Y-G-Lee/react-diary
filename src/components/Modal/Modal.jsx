import "./Modal.css";
import close from "../../assets/close.png";

// Lotto와 Home에서 props로 넘긴 msg값 꺼내기
// 1. Modal() 괄호 안에 props 넣기
function Modal(props) {
    console.log(props);
    console.log(props.msg);

    const msg = props.msg;
  return (
    <div className="modal">
      <div className="modal-top">
        {/* 클릭시 모달창 닫기 */}
        <img
          className="modal-close"
          src={close}
          alt=""
          onClick={props.close}
        />
      </div>
      <div className="modal-bottom">{msg}</div>
    </div>
  );
}

export default Modal;
