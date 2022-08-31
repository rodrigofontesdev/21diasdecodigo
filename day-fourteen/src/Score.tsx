import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Score.module.scss";

interface LocationProps {
  user_score: number;
}

export function Score() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationProps;
  const message =
    state.user_score <= 2
      ? "Você não foi bem, continue estudando!"
      : state.user_score === 3
      ? "Nada mal! Quase você chegou lá!"
      : "Muito bom! Você é muito inteligente!";

  return (
    <main>
      <h1>RESULTADO</h1>

      <div className={styles.scoreBox}>
        <h2>Você acertou:</h2>

        <div className={styles.score}>
          <span>{state.user_score}</span>
          <span>/</span>
          <span>5</span>
        </div>

        <p>{message}</p>

        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Fazer Quiz Novamente
        </button>
      </div>
    </main>
  );
}
