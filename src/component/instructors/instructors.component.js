import "./instructors.styles.css";

import instructorA from "../../img/instructor-1.jpg";
import instructorB from "../../img/instructor-2.jpg";
import instructorC from "../../img/instructor-3.jpg";

import InstructorCard from "../instructor-card/instructor-card.component";

export default function Instructors() {
  return (
    <section className="section-instructors">
      <div className="container">
        <h2 className="heading-secondary margin-bottom-md">Our Instructors</h2>
        <div className="grid">
          <InstructorCard
            instructorImage={instructorA}
            instructorName={"Master Long Shi Han"}
            instructorRank={["8", <sup>th</sup>, " Dan"]}
            rightSideImage={false}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam.
          </InstructorCard>

          <InstructorCard
            instructorImage={instructorB}
            instructorName={"Instructor Arun Somchai"}
            instructorRank={["4", <sup>th</sup>, " Dan"]}
            rightSideImage={true}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur.
          </InstructorCard>

          <InstructorCard
            instructorImage={instructorC}
            instructorName={"Assistant Instructor Liliya Morozov"}
            instructorRank={["2", <sup>nd</sup>, " Dan"]}
            rightSideImage={false}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vitae earum repellendus, harum quae atque
            obcaecati enim ipsum numquam doloremque quasi temporibus.
          </InstructorCard>
        </div>
      </div>
    </section>
  );
}
