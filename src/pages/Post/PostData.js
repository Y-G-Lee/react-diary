export const initPostArray = [
    {
        no: 23123,
        title: "월요일 게시글",
        content: "월요일 좋아~",
        date: "2025.04.23"
    }, {
        no: 23122,
        title: "일요일 게시글",
        content: "일요일 싫어~",
        date: "2025.04.22"
    },{
        no: 23121,
        title: "토요일 게시글",
        content: "토요일 좋아~",
        date: "2025.04.21"
    }
];

// postArray에서 가장 높은 글번호 리턴
export function getNextNo(postArray) {
    let max = 0;
    postArray.forEach((data) => {
        if(max < data.no) {
            max = data.no;
        }
    });
    return max + 1;
}