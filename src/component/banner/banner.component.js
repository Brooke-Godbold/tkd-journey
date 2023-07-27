import "./banner.styles.css";

import Card from "../card/card.component";

export default function Banner() {
  return (
    <section className="section-banner">
      <div className="container container--wide grid grid--5-cols">
        <Card
          cardTitle={"Courtesy"}
          cardText={"I shall observe the tenets of Taekwondo"}
        />
        <Card
          cardTitle={"Integrity"}
          cardText={"I shall respect the instructor and seniors"}
        />
        <Card
          cardTitle={"Perseverance"}
          cardText={"I shall never misuse Taekwondo"}
        />
        <Card
          cardTitle={"Self Control"}
          cardText={"I shall be a champion of freedom and justice"}
        />
        <Card
          cardTitle={"Indomitable Spirit"}
          cardText={"I shall build a more peaceful world"}
        />
      </div>
    </section>
  );
}
