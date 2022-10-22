import { Image } from "@chakra-ui/react";
import React from "react";

const AppPage = ({ userDetails }) => {
  return (
    <div>
      Hello {userDetails?.name}
      <Image src={userDetails?.picture} alt="" />
    </div>
  );
};

export default AppPage;
