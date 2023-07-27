import "./testimonials.styles.css";

import Andy from "../../img/andy.jpg";
import Shweta from "../../img/shweta.jpg";
import Lily from "../../img/lily.jpg";
import Nikandr from "../../img/nikandr.jpg";

import gallery1 from "../../img/gallery-1.jpg";
import gallery2 from "../../img/gallery-2.jpg";
import gallery3 from "../../img/gallery-3.jpg";
import gallery4 from "../../img/gallery-4.jpg";
import gallery5 from "../../img/gallery-5.jpg";
import gallery6 from "../../img/gallery-6.jpg";

import Testimonial from "../testimonial/testimonial.component";
import GalleryImage from "../gallery/gallery-image.component";

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="container container--wide">
        <h2 className="heading-secondary margin-bottom-md">Our Students</h2>
        <div className="grid grid--2-cols align-center">
          <div className="testimonials-container">
            <Testimonial testimonialImage={Andy} testimonialName={"Andy"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              earum repellendus, harum quae atque obcaecati enim ipsum numquam
              doloremque quasi temporibus. Lorem ipsum dolor sit amet
              consectetur.
            </Testimonial>

            <Testimonial testimonialImage={Shweta} testimonialName={"Shweta"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              earum repellendus, harum quae atque obcaecati enim ipsum numquam
              doloremque quasi temporibus. Lorem ipsum dolor sit amet
              consectetur.
            </Testimonial>

            <Testimonial testimonialImage={Lily} testimonialName={"Lily"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              earum repellendus, harum quae atque obcaecati enim ipsum numquam
              doloremque quasi temporibus. Lorem ipsum dolor sit amet
              consectetur.
            </Testimonial>

            <Testimonial testimonialImage={Nikandr} testimonialName={"Nikandr"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              earum repellendus, harum quae atque obcaecati enim ipsum numquam
              doloremque quasi temporibus. Lorem ipsum dolor sit amet
              consectetur.
            </Testimonial>
          </div>

          <div className="gallery-container">
            <GalleryImage galleryImage={gallery1} />
            <GalleryImage galleryImage={gallery2} />
            <GalleryImage galleryImage={gallery3} />
            <GalleryImage galleryImage={gallery4} />
            <GalleryImage galleryImage={gallery5} />
            <GalleryImage galleryImage={gallery6} />
          </div>
        </div>
      </div>
    </section>
  );
}
