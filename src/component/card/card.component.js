import "./card.styles.css";

export default function Card({ cardTitle, cardText }) {
  return (
    <div className="banner-card-outer">
      <div className="banner-card-inner">
        <p className="banner-card-title">{cardTitle}</p>
        <p className="banner-card-text">{cardText}</p>
      </div>
    </div>
  );
}
