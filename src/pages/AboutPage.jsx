import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>A propos </h1>
        <p>Application React enquête de satisfaction</p>
        <p>Version : 1.0.0</p>
        <p>
          <Link to={"/"}>Retour a l'accueil</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
