"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 세션 유지
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(result.message);
        router.push("/memo"); // 로그인 성공 후 리다이렉트
      } else {
        throw new Error(result.detail || "로그인 실패");
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "오류 발생");
    }
  };

  const submitSignupForm = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(signupData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        router.push("/"); // 회원가입 성공 후 홈으로 리다이렉트
      } else {
        throw new Error(result.detail || "회원가입 실패");
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "오류 발생");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>마이 메모 앱에 오신 것을 환영합니다!</h1>
      <p className={styles['sub-title']}>간단한 메모를 작성하고 관리할 수 있는 앱입니다.</p>

      {/* 로그인 폼 */}
      <form onSubmit={submitLoginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">사용자 이름:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit">로그인</button>
        </div>
      </form>

      <br />
      <br />

      {/* 회원가입 폼 */}
      <form onSubmit={submitSignupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="signup_username">사용자 이름:</label>
          <input
            type="text"
            id="signup_username"
            name="username"
            value={signupData.username}
            onChange={handleSignupChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="signup_email">이메일:</label>
          <input
            type="email"
            id="signup_email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="signup_password">비밀번호:</label>
          <input
            type="password"
            id="signup_password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
            required
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
