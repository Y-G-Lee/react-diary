import { useRef, useState } from "react";
import { getDate } from "../../common/common";
import "./Home.css";
import Modal from "../../components/Modal/Modal";

// Home 컴포넌트
// 홈화면에서 App.jsx의 네비게이션 아래 위치할 화면단
function Home() {
  // input 태그에 입력한값을 버튼클릭시 가져오기
  // 1. useRef방식
  // 기존과 같이 버튼클릭시 input태그 요소를 불러서 value 값꺼내기
  // 1-1 userRef 임포트
  // 1-2 useRef()을 병수에 할당
  const inputText = useRef();
  // 1-3 JSX 태그 ref 속성에 넣기
  // 버튼클릭시 실행될 함수 선언
  const readText = () => {
    console.log(inputText); // key값 current 내부에 input 태그 존재
    console.log(inputText.current); // input 태그 꺼내기
    console.log(inputText.current.value); // input 태그의 value 꺼내기
    // 내용비우기
    inputText.current.value = "";
  };

  // 2. useState 방식 (권장)
  // input 태그의 value에 대해 상태관리 (= useState 사용)
  // 2-1. useState 임포트
  // 2-2. input 태그의 value에 대해 상태관리를 할 변수 선언
  // const [변수명, 변수를바꿀함수명] = useState(변수에할당할기본값)
  const [text, setText] = useState("");
  // 2-3. input 태그의 value가 바뀔때마다 setText에 반영 (= onChange 사용)

  // JSON객체들이 들어있는 배열을 화면에 그리기
  // useState으로 상태관리하기
  const [dataArray, setDataArray] = useState([
    {
      no: 1,
      title: "첫번째 감성",
      date: "2025.05.01",
    },
    {
      no: 2,
      title: "두번째 감성",
      date: "2025.05.03",
    },
  ]);

  const [isModalShow, setIsModalShow] = useState(false);
  const [modalMsg, setModalMsg] = useState();

  return (
    <>
      {/* 페이지가 바뀔때마다 네비게이션 아래 부분 교체되면 됨 */}
      {/* 홈 화면에 대해 Home 컴포넌트 생성 */}

      <div className="home-container">
        {/* 태그에 inline style 부여 (비추) */}
        {/* color: hotpink; text-align: center; */}
        <h1 style={{ color: "pink", textAlign: "center", marginTop: "40px" }}>
          오늘의 한줄감성
        </h1>
        {/* useRef 방식 */}
        <div className="input-box">
          <input ref={inputText} className="input-text" type="text" />
          <button className="input-btn" onClick={readText}>
            등록
          </button>
        </div>
        {/* userState 방식 */}
        <div className="input-box">
          <input
            className="input-text"
            type="text"
            value={text}
            onChange={(e) => {
              // event.target.value 와 같음
              console.log(e.target.value);
              // input태그의 value값을 text에 반영
              setText(e.target.value);
            }}
          />
          <button
            className="input-btn"
            onClick={() => {
              console.log(text);

              if(!text) {
                setModalMsg("한줄 감성을 입력해주세요");
                setIsModalShow(true);
                return;
              }

              // JSON 객체 생성
              const temp = {};
              temp.title = text;
              temp.no = dataArray.length + 1;
              temp.date = getDate(); // common.js의 getDate()

              console.log(temp);

              // dataArray에 추가
              dataArray.push(temp);

              // dataArray와 값은 같지만 메모리주소가 다른 객체 생성 (= 깊은 복사)
              const newCoppyArray = [...dataArray];

              setDataArray(newCoppyArray);

              // input 태그 내부 비워주기
              setText("");

              setModalMsg("등록되었습니다");
              setIsModalShow(true);
            }}
          >
            등록
          </button>
        </div>

        {/* dataArray 나타낼 부분 (하드코딩) */}
        <div className="data-box">
          <div className="data">
            <span className="data-date"> 2025.05.01 </span>
            <span> 첫번째 감성 </span>
          </div>
          <div className="data">
            <span className="data-date"> 2025.05.03 </span>
            <span> 두번째 감성 </span>
          </div>
        </div>

        {/* dataArray를 이용하여 화면 구현 */}
        {/* 이후 input-btn 버튼을 누르면 dataArray에 JSON 객체가 추가되고 화면에 반영 */}
        {/* dataArray를 useState으로 상태관리하기 */}
        <div className="data-box">
          {dataArray.map((data) => (
            <div key={data.no} className="data">
              <span className="data-date"> {data.date} </span>
              <span> {data.title} </span>
            </div>
          ))}
        </div>

        {
          isModalShow &&
          // input 태그값이 비어있다면 modalMsg = "한줄감성을 입력하세요"
          // input 태그값이 채워져있다면 modalMsg = "등록되었습니다"
          // 이후 setIsModalShow(true)
          <Modal msg={modalMsg} close={() => setIsModalShow(false)} />
        }
      </div>
    </>
  );
}

export default Home;
