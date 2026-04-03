import { useState } from "react";

interface Props {
  onStart: (nickname: string) => void;
}

export function TitleScreen({ onStart }: Props) {
  const [nickname, setNickname] = useState("");

  return (
    <div className="screen title-screen">
      <div className="title-logo">💸</div>
      <h1 className="title-text">천조 탕진<br />시뮬레이터</h1>
      <p className="title-sub">1,000,000,000,000,000원을 탕진하라!</p>
      <div className="title-input-wrap">
        <input
          className="title-input"
          type="text"
          placeholder="닉네임 입력 (선택)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          onKeyDown={(e) => e.key === "Enter" && onStart(nickname)}
        />
        <button className="btn-start" onClick={() => onStart(nickname)}>
          탕진 시작! 🔥
        </button>
      </div>
    </div>
  );
}
