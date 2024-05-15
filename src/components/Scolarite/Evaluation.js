import React, { useState } from 'react';
import './Evaluation.css';

const Star = ({ selected = false, onClick }) => (
  <span className={selected ? "star selected" : "star"} onClick={onClick}>
    ★
  </span>
);

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          selected={i < rating}
          onClick={() => setRating(i + 1)}
        />
      ))}
    </div>
  );
};

const Evaluation = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState({
    cours: '',
    utilite: '',
    professeur: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données au serveur ou traitement des données
    console.log({ rating, feedback });
  };

  return (
    <div className="evaluation-container">
      <h2>Évaluation du Module de Maths</h2>
      <StarRating rating={rating} setRating={setRating} />
      <textarea
        name="cours"
        placeholder="Comment s'est passé le cours ?"
        value={feedback.cours}
        onChange={handleChange}
      />
      <textarea
        name="utilite"
        placeholder="Le cours vous a-t-il été utile ?"
        value={feedback.utilite}
        onChange={handleChange}
      />
      <textarea
        name="professeur"
        placeholder="Comment était le professeur ?"
        value={feedback.professeur}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Soumettre</button>
    </div>



  );
};

export default Evaluation;
