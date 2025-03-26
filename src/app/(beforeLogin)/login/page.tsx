"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/main";

//  로그인 버튼 클릭시 /login -> /i/flow/login으로 리다이렉트되는 구조
//  next/navigation의 redirect에서는 인터셉트 라우팅이 제대로 작동하지 않으므로
//  client redirect로 수정해주어야 함 (useRouter 사용)

export default function Login() {
  const router = useRouter();
  // router.push를 사용하면 뒤로가기시 정상 작동하지 않는 경우이므로 replace 사용

  // 이슈 : router.replace("/i/flow/login"); 무한 GET /i/flow/login 요청 발생
  // 원인
  //  1. Login 컴포넌트가 렌더링될 때마다 router.replace 실행됨
  //  2. router.replace는 페이지를 /i/flow/login으로 변경하는데 이 때 컴포넌트가 리마운트 됨
  //  3. 리마운트되면 router.replace가 실행되고 무한 루프에 빠짐
  // 해결 : useEffect를 이용해 첫 렌더링시에만 실행되도록 해줌

  useEffect(() => {
    router.replace("/i/flow/login");
    console.log("login 페이지1");
  }, [router]);

  return <Main />;
}
