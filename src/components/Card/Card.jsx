import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.nome}</h1>
      <img
        src={props.imagem}
        alt=""
        width={"100px"}
      />
    </div>
  );
}
