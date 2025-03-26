import { NextPage } from "next";
import Link from "next/link";

const Notfound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다.</div>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default Notfound;
