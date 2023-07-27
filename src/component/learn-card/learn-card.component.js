import "./learn-card.styles.css";

export default function LearnCard({ learnTitle, icon, children }) {
  return (
    <div className="learn-card">
      <div className="learn-card-content">
        {icon}
        <h3 className="heading-tertiary">{learnTitle}</h3>
        <p className="learn-card-text">{children}</p>
      </div>
    </div>
  );
}
