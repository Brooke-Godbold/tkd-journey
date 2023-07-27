import "./App.css";

import Nav from "./component/nav/nav.component";
import Hero from "./component/hero/hero.component";
import Banner from "./component/banner/banner.component";
import Instructors from "./component/instructors/instructors.component";
import WhatYouWillLearn from "./component/learn/learn.component";
import AboutUs from "./component/about/about.component";
import Testimonials from "./component/testimonials/testimonials.component";
import HowToFindUs from "./component/location/how-to-find.component";
import CallToAction from "./component/cta/call-to-action.component";
import Footer from "./component/footer/footer.component";

import "./queries.css";

function App() {
  return (
    <>
      <body>
        <Nav />
        <Hero />
        <Banner />
        <AboutUs />
        <WhatYouWillLearn />
        <Instructors />
        <Testimonials />
        <HowToFindUs />
        <CallToAction />
        <Footer />
      </body>
    </>
  );
}

export default App;
