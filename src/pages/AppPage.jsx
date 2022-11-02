import { Box, Button, Flex } from "@chakra-ui/react";
import ReactPDF, { Document, Page, Text, View } from "@react-pdf/renderer";
import axios from "axios";

import React from "react";
import ReactDOM from "react-dom";
import FormPage from "../components/AppPage/FormPage";
import ResumePreview from "./ResumePreview";

// const MyDocument = ({ resumeDetails }) => (
//   <Document>
//     <Page size="A4" style={{ height: "200px" }}>
//       <View>
//         <Text>{resumeDetails?.basic?.name}</Text>
//       </View>
//     </Page>
//   </Document>
// );

const AppPage = ({ resumeDetails, setResumeDetails }) => {
  const send = async () => {
    console.log(resumeDetails);
    // ReactDOM.render(
    //   <MyDocument resumeDetails={resumeDetails} />,
    //   document.getElementById("test")
    // );
  };

  return (
    <Flex w="full" direction="column" p="4" align="center" gap="5">
      <Flex
        w="full"
        maxW="8xl"
        gap="5"
        justify="center"
        align={["center", "center", "center", "center", "center", "flex-start"]}
        direction={["column", "column", "column", "column", "column", "row"]}
      >
        <Box w="full" maxW="5xl">
          <FormPage
            resumeDetails={resumeDetails}
            setResumeDetails={setResumeDetails}
          />
        </Box>
        <Flex
          w="full"
          maxW="750px"
          minH="970px"
          border="1px solid #e2e8f0"
          borderRadius="lg"
          p="10"
        >
          <Box w="full" h="full">
            <ResumePreview resumeDetails={resumeDetails} />
          </Box>
        </Flex>
      </Flex>
      <Button colorScheme="blue" onClick={send}>
        Download
      </Button>

      <Flex id="test" h="100"></Flex>
    </Flex>
  );
};

export default AppPage;
