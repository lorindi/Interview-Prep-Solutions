import { Link } from "react-router-dom";

function Card({ note }) {

  return (
    <Link to={`/single/${note.id}`} className="">
      <h2>{note.title}</h2>
    </Link>
  );
}

export default Card;
