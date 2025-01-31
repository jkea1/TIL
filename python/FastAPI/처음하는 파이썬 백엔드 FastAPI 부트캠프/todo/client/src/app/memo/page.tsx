"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type Memo = {
  id: number;
  title: string;
  content: string;
};

const Page = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingMemoId, setEditingMemoId] = useState<number | null>(null); // 현재 수정 중인 메모 ID
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/memos", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => { 
        setMemos(data.memos)
        setUsername(data.username)
      })
      .catch((err) => console.error("Error fetching memos:", err));
  }, []);

  const createMemo = async () => {
    if (!newTitle.trim() || !newContent.trim()) {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    const response = await fetch("http://localhost:8000/memos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });

    if (response.ok) {
      const newMemo = await response.json();
      setMemos([...memos, newMemo]);
      setNewTitle("");
      setNewContent("");
    } else {
      alert("메모 생성 실패");
    }
  };

  const updateMemo = async (id: number, title: string, content: string) => {
    const response = await fetch(`http://localhost:8000/memos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setMemos(memos.map((memo) => (memo.id === id ? { ...memo, title, content } : memo)));
      setEditingMemoId(null); // 수정 완료 후 상태 초기화
      alert("메모가 업데이트되었습니다.");
    } else {
      alert("메모 수정 실패");
    }
  };

  const deleteMemo = async (id: number) => {
    if (!confirm("메모를 삭제하시겠습니까?")) return;

    const response = await fetch(`http://localhost:8000/memos/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      setMemos(memos.filter((memo) => memo.id !== id));
    } else {
      alert("메모 삭제 실패");
    }
  };

  const logout = async () => {
    await fetch("/logout", { method: "POST", credentials: "include" });
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <button className={`${styles.btn} ${styles.usernameButton}`}>
          <i className="fas fa-user"></i> {username || "Guest"}
        </button>
        <h1 className={styles.title}>나의 메모</h1>
        <button onClick={logout} className={`${styles.btn} ${styles.logoutButton}`}>
          <i className="fas fa-sign-out-alt"></i> 로그아웃
        </button>
      </div>

      <div className={styles.card}>
        <input
          type="text"
          placeholder="새 메모 제목"
          className={styles.memoInput}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="내용을 입력하세요"
          className={styles.memoTextarea}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={createMemo} className={styles.addButton}>
          메모 추가
        </button>
      </div>

      {memos.map((memo) => (
        <div key={memo.id} className={styles.card}>
          {editingMemoId === memo.id ? (
            <>
              <input
                type="text"
                className={styles.memoInput}
                value={memo.title}
                onChange={(e) =>
                  setMemos(memos.map((m) => (m.id === memo.id ? { ...m, title: e.target.value } : m)))
                }
              />
              <textarea
                className={styles.memoTextarea}
                value={memo.content}
                onChange={(e) =>
                  setMemos(memos.map((m) => (m.id === memo.id ? { ...m, content: e.target.value } : m)))
                }
              />
            </>
          ) : (
            <>
              <p className={styles.memoTitle}>{memo.title}</p>
              <p className={styles.memoContent}>{memo.content}</p>
            </>
          )}

          <div className={styles.buttonGroup}>
            {editingMemoId === memo.id ? (
              <button onClick={() => updateMemo(memo.id, memo.title, memo.content)} className={styles.saveButton}>
                저장
              </button>
            ) : (
              <button onClick={() => setEditingMemoId(memo.id)} className={styles.editButton}>
                수정
              </button>
            )}
            <button onClick={() => deleteMemo(memo.id)} className={styles.deleteButton}>
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
