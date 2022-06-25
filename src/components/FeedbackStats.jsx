import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContest";

function FeedbackStats() {
  // Calcule de la moyenne des notes (rating)
  const { feedback } = useContext(FeedbackContext);
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Avis</h4>
      <h4>Note moyenne : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
