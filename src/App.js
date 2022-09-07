import "./styles.css";
import Number from "../src/components/diplayNumber";
import style from "../src/styles/Number.module.css";
import { useEffect, useState } from "react";
import Mega from "../src/functions/Mega";

export default function App() {
  const [num, setNum] = useState(6);
  const [numAleatorios, setNumAleatorios] = useState([]);
  useEffect(() => {
    setNumAleatorios(Mega(num));
  }, []);

  function renderizarNumeros() {
    return numAleatorios.map((number) => (
      <Number key={number} number={number} />
    ));
  }

  return (
    <div className={style.display}>
      <div>
        <h1>Numeros Aleatórios</h1>
      </div>
      <div className={style.numeros}>{renderizarNumeros()}</div>

      <div>
        <input
          type="number"
          min={1}
          max={20}
          value={num}
          onChange={(e) => setNum(+e.target.value)}
        />
        <button
          onClick={() => {
            setNumAleatorios(Mega(num));
          }}
        >
          Calc
        </button>
      </div>
    </div>
  );
}
