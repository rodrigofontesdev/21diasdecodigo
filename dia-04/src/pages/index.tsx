import Head from "next/head";
import React, { useState } from "react";
import styles from "./home.module.scss";

interface Digit {
  num: string;
  res: string;
}

interface Operator {
  old: string;
  current: string;
}

export default function Home() {
  const [calc, setCalc] = useState<Digit>({ num: "", res: "" });
  const [operator, setOperator] = useState<Operator>({ old: "", current: "" });

  // manipula o algarismo digitado
  const handleDigit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = e.currentTarget;
    const typedDigit = input.innerHTML;
    const sanitazedDigit =
      typedDigit === "."
        ? calc.num.replace(/[^\.]/g, "").length < 1
          ? typedDigit
          : ""
        : typedDigit;

    if (operator.current) {
      setOperator({ old: operator.current, current: "" });
    }

    if (calc.num.replace(/\D/g, "").length < 8) {
      if (!operator.current) {
        setCalc({
          num: calc.num + sanitazedDigit,
          res: !calc.res ? "" : calc.res,
        });
      } else {
        setCalc({
          num: sanitazedDigit,
          res: !calc.res && calc.num ? calc.num : calc.res,
        });
      }
    }
  };

  // manipula a operação
  const handleOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sign = e.currentTarget.innerHTML;

    if (operator.old === "") {
      setOperator({ old: "", current: sign });
    } else {
      let result;

      switch (operator.old) {
        case "+":
          result = sum(Number(calc.res), Number(calc.num));
          break;
        case "−":
          result = subtract(Number(calc.res), Number(calc.num));
          break;
        case "×":
          result = multiply(Number(calc.res), Number(calc.num));
          break;
        case "÷":
          result = divide(Number(calc.res), Number(calc.num));
          break;
      }

      setCalc({
        num: calc.num,
        res: result ? result?.toString() : calc.num,
      });
      setOperator({ old: "", current: sign });
    }
  };

  // limpar a memóría da calculadora
  const clear = () => {
    setCalc({ num: "", res: "" });
    setOperator({ old: "", current: "" });
  };

  // apagar o digíto mais recente
  const backspace = () => {
    if (calc.num === "") {
      setCalc({ num: calc.num, res: calc.res });
    } else {
      const newNum = calc.num
        .toString()
        .substring(0, calc.num.toString().length - 1);

      setCalc({ num: newNum, res: "" });
    }
  };

  // deixar o algarismo negativo ou positivo
  const plusMinus = (e: React.MouseEvent<HTMLButtonElement>) => {
    const reverseNum = calc.num !== "" ? Number(Number(calc.num) * -1) : "";

    setCalc({ num: reverseNum.toString(), res: calc.res.toString() });
  };

  // operação de adição
  const sum = (value1: number, value2: number) => {
    return value1 + value2;
  };

  // operação de subtração
  const subtract = (value1: number, value2: number) => {
    return value1 - value2;
  };

  // operação de multiplicação
  const multiply = (value1: number, value2: number) => {
    return value1 * value2;
  };

  // operação de divisão
  const divide = (value1: number, value2: number) => {
    if (value2 === 0) {
      setCalc({ num: "", res: "" });
      return;
    }

    return value1 / value2;
  };

  // retorna o total da operação
  const equal = () => {};

  const hasValueClass = calc.num !== "" ? styles.hasValue : "";

  return (
    <>
      <Head>
        <title>Dia 04 - 21 Dias de Código Rocketseat</title>
      </Head>

      <main>
        <div className={styles.calculator}>
          <div className={styles.brand}>
            <div></div>
            <span>FONTES</span>
          </div>

          <div className={`${styles.display} ${hasValueClass}`}>
            {calc.res ? calc.res : calc.num ? calc.num : 0}
          </div>

          <div className={styles.keyboard}>
            <button onClick={clear} className={styles.buttonClearEntry}>
              CE
            </button>
            <button onClick={backspace}>&larr;</button>
            <button onClick={plusMinus}>&plusmn;</button>
            <button onClick={handleOperator}>&divide;</button>
            <button onClick={handleDigit}>7</button>
            <button onClick={handleDigit}>8</button>
            <button onClick={handleDigit}>9</button>
            <button onClick={handleOperator}>&times;</button>
            <button onClick={handleDigit}>4</button>
            <button onClick={handleDigit}>5</button>
            <button onClick={handleDigit}>6</button>
            <button onClick={handleOperator}>&minus;</button>
            <button onClick={handleDigit}>1</button>
            <button onClick={handleDigit}>2</button>
            <button onClick={handleDigit}>3</button>
            <button onClick={handleOperator} className={styles.buttonSum}>
              +
            </button>

            <button onClick={handleDigit}>0</button>
            <button onClick={handleDigit}>.</button>
            <button onClick={equal}>=</button>
          </div>
        </div>
      </main>
    </>
  );
}
