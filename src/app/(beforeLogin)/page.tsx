import Main from "./_component/main";

/*
페이지 구분

[로그인 전]
/ : 로그인 페이지
/login : 로그인 버튼 클릭시 이동 
/i/flow/login : 로그인 모달
/i/flow/signup : 회원가입 모달

[로그인 후] 
/home : 메인 페이지
/explore : 검색 페이지
/search : 검색 결과 페이지
/messages : 쪽지 페이지
/[id] : 프로필 페이지
/[id]/status/[postId] : 게시물 상세

*/

/* 페러렐 라우트는 띄우고자 하는 페이지와 같은 폴더구조 내에 존재해야 함 */
/* '/' 경로의 페이지와 띄우되, 모달은 '/i/flow/login'에서 띄워지므로 인터셉팅 라우트로 구현 */
export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
