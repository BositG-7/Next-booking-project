import { getSessionlogin, setSessionlogin } from "@/services/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const navigete = useRouter();
  useEffect(() => {
    const isLogin = getSessionlogin();
    if (!isLogin) {
      navigete.push("/login");
    } else {
      navigete.push("/books");
    }
  }, []);

  return (
    <>
      <h1>dqwqw</h1>
    </>
  );
}
