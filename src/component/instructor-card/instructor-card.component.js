import "./instructor-card.styles.css";

export default function InstructorCard({
  instructorImage,
  instructorName,
  instructorRank,
  rightSideImage,
  children,
}) {
  return (
    <div
      className="instructor-card"
      style={
        rightSideImage
          ? { gridTemplateColumns: `3fr 1fr` }
          : { gridTemplateColumns: `1fr 3fr` }
      }
    >
      {rightSideImage ? null : (
        <div
          className="instructor-img"
          style={{ backgroundImage: `url(${instructorImage})` }}
        />
      )}
      <div className="instructor-text-box">
        <h3 className="heading-tertiary">{instructorName}</h3>
        <p className="instructor-rank">{instructorRank}</p>
        <p className="instructor-description">{children}</p>
      </div>
      {rightSideImage ? (
        <div
          className="instructor-img"
          style={{ backgroundImage: `url(${instructorImage})` }}
        />
      ) : null}
    </div>
  );
}
