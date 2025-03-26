// 해당 페이지에서는
// main 페이지를 배경으로 띄우면서 modal을 함께 띄우는 구조
// 두 개의 페이지를 동시에 띄우기 위해 패러럴 라우트로 구현

import LoginModal from "@/app/(beforeLogin)/_component/loginModal";

export default function Page() {
  return (
    <main>
      그냥
      <LoginModal />
    </main>
  );
}
