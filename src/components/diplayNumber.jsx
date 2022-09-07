import style from "../styles/Number.module.css";

export default function DisplayNumber(props) {
  return (
    <div className={style.number}>
      <span>{props.number}</span>
    </div>
  );
}
