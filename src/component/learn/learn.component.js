import "./learn.styles.css";

import LearnCard from "../learn-card/learn-card.component";

import {
  IconFist,
  IconClap,
  IconPalm,
  IconPerson,
  IconForms,
  IconRelax,
  IconRunning,
  IconShield,
} from "../icon/icon.component";

export default function WhatYouWillLearn() {
  return (
    <section className="section-learn">
      <div className="container container--wide">
        <h2 className="heading-secondary margin-bottom-md">
          What You Will Learn
        </h2>
        <div className="grid grid--4-cols">
          <LearnCard
            icon={<IconFist size={"48"} color={"#444"} />}
            learnTitle={"Technique"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconPalm size={"48"} color={"#444"} />}
            learnTitle={"Breaking"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconClap size={"48"} color={"#444"} />}
            learnTitle={"Sparring"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconForms size={"48"} color={"#444"} />}
            learnTitle={"Forms"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconShield size={"48"} color={"#444"} />}
            learnTitle={"Self-Defense"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconRelax size={"48"} color={"#444"} />}
            learnTitle={"Breathing & Meditation"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconRunning size={"48"} color={"#444"} />}
            learnTitle={"Aerobic & Anaerobic Workout"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>

          <LearnCard
            icon={<IconPerson size={"48"} color={"#444"} />}
            learnTitle={"Personal Development"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </LearnCard>
        </div>
      </div>
    </section>
  );
}
