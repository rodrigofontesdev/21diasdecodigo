import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App.module.scss";

const correctAnswers = ["6", "china", "washington", "monte_everest", "berlim"];

interface Questions {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
}

export function App() {
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0);
  const [questions, setQuestions] = useState<Questions>({
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let newScore = score;

    Object.keys(questions).forEach((item, index) => {
      if (questions[item as keyof Questions] === correctAnswers[index]) {
        newScore++;
        setScore(newScore);
      }
    });

    navigate("/resultado", { state: { user_score: newScore } });
  };

  console.log(questions, score);

  const handleQuestionOne = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...questions,
      question_1: target.value,
    };

    setQuestions(values);
  };

  const handleQuestionTwo = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...questions,
      question_2: target.value,
    };

    setQuestions(values);
  };

  const handleQuestionThree = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...questions,
      question_3: target.value,
    };

    setQuestions(values);
  };

  const handleQuestionFour = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...questions,
      question_4: target.value,
    };

    setQuestions(values);
  };

  const handleQuestionFive = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...questions,
      question_5: target.value,
    };

    setQuestions(values);
  };

  return (
    <main>
      <h1>QUIZ</h1>

      <form
        action=""
        method="post"
        name="Formulário de Quiz"
        className={styles.quiz}
        onSubmit={handleSubmit}
      >
        <h2>1. Quantos continentes existem na Terra?</h2>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_1"
            id="4"
            className={styles.formInput}
            value="4"
            required
            onChange={handleQuestionOne}
          />
          <label htmlFor="4">4</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_1"
            id="7"
            className={styles.formInput}
            value="7"
            required
            onChange={handleQuestionOne}
          />
          <label htmlFor="7">7</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_1"
            id="8"
            className={styles.formInput}
            value="8"
            required
            onChange={handleQuestionOne}
          />
          <label htmlFor="8">8</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_1"
            id="6"
            className={styles.formInput}
            value="6"
            required
            onChange={handleQuestionOne}
          />
          <label htmlFor="6">6</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_1"
            id="5"
            className={styles.formInput}
            value="5"
            required
            onChange={handleQuestionOne}
          />
          <label htmlFor="5">5</label>
        </div>

        <h2>2. Qual país tem a maior população no mundo?</h2>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_2"
            id="india"
            className={styles.formInput}
            value="india"
            required
            onChange={handleQuestionTwo}
          />
          <label htmlFor="india">Índia</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_2"
            id="estados_unidos"
            className={styles.formInput}
            value="estados_unidos"
            required
            onChange={handleQuestionTwo}
          />
          <label htmlFor="estados_unidos">Estados Unidos</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_2"
            id="russia"
            className={styles.formInput}
            value="russia"
            required
            onChange={handleQuestionTwo}
          />
          <label htmlFor="russia">Rússia</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_2"
            id="china"
            className={styles.formInput}
            value="china"
            required
            onChange={handleQuestionTwo}
          />
          <label htmlFor="china">China</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_2"
            id="brasil"
            className={styles.formInput}
            value="brasil"
            required
            onChange={handleQuestionTwo}
          />
          <label htmlFor="brasil">Brasil</label>
        </div>

        <h2>3. Qual é a capital dos Estados Unidos?</h2>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_3"
            id="nova_iorque"
            className={styles.formInput}
            value="nova_iorque"
            required
            onChange={handleQuestionThree}
          />
          <label htmlFor="nova_iorque">Nova Iorque</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_3"
            id="texas"
            className={styles.formInput}
            value="texas"
            required
            onChange={handleQuestionThree}
          />
          <label htmlFor="texas">Texas</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_3"
            id="washington"
            className={styles.formInput}
            value="washington"
            required
            onChange={handleQuestionThree}
          />
          <label htmlFor="washington">Washington D.C</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_3"
            id="california"
            className={styles.formInput}
            value="california"
            required
            onChange={handleQuestionThree}
          />
          <label htmlFor="california">Califórnia</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_3"
            id="havai"
            className={styles.formInput}
            value="havai"
            required
            onChange={handleQuestionThree}
          />
          <label htmlFor="havai">Havaí</label>
        </div>

        <h2>4. Qual a maior montanha do planeta?</h2>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_4"
            id="monte_everest"
            className={styles.formInput}
            value="monte_everest"
            required
            onChange={handleQuestionFour}
          />
          <label htmlFor="monte_everest">Monte Everest</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_4"
            id="kangchenjunga"
            className={styles.formInput}
            value="kangchenjunga"
            required
            onChange={handleQuestionFour}
          />
          <label htmlFor="kangchenjunga">Kangchenjunga</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_4"
            id="nanda_devi"
            className={styles.formInput}
            value="nanda_devi"
            required
            onChange={handleQuestionFour}
          />
          <label htmlFor="nanda_devi">Nanda Devi</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_4"
            id="jannu"
            className={styles.formInput}
            value="jannu"
            required
            onChange={handleQuestionFour}
          />
          <label htmlFor="jannu">Jannu</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_4"
            id="makalu"
            className={styles.formInput}
            value="makalu"
            required
            onChange={handleQuestionFour}
          />
          <label htmlFor="makalu">Makalu</label>
        </div>

        <h2>5. Qual é a capital da Alemanha?</h2>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_5"
            id="paris"
            className={styles.formInput}
            value="paris"
            required
            onChange={handleQuestionFive}
          />
          <label htmlFor="paris">Paris</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_5"
            id="berlim"
            className={styles.formInput}
            value="berlim"
            required
            onChange={handleQuestionFive}
          />
          <label htmlFor="berlim">Berlim</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_5"
            id="moscou"
            className={styles.formInput}
            value="moscou"
            required
            onChange={handleQuestionFive}
          />
          <label htmlFor="moscou">Moscou</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_5"
            id="zagreb"
            className={styles.formInput}
            value="zagreb"
            required
            onChange={handleQuestionFive}
          />
          <label htmlFor="zagreb">Zagreb</label>
        </div>

        <div className={styles.formCheck}>
          <input
            type="radio"
            name="question_5"
            id="lisboa"
            className={styles.formInput}
            value="lisboa"
            required
            onChange={handleQuestionFive}
          />
          <label htmlFor="lisboa">Lisboa</label>
        </div>

        <button type="submit">Enviar Resposta</button>
      </form>
    </main>
  );
}
