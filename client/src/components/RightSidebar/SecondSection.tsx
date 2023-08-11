import React from "react";

import SecondSectionTitle from "./SecondSectionTitle";
import SecondSectionContent from "./SecondSectionContent";
import { secondSectionDummy as contentDummyData } from "./DummyData";

const SecondSection = () => {
  return (
    <section>
      <SecondSectionTitle />
      {contentDummyData.map(item => (
        <SecondSectionContent
          key={item.brandName}
          img={item.img}
          brandName={item.brandName}
          followers={item.followers}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default SecondSection;
