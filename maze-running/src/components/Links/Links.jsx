import { Link } from "react-router-dom";
import Modal from "../UI/Modal";

export default function Links() {
  return (
    <Modal>
      <Link to="/highscores">High Scores</Link>
    </Modal>
  );
}
