import { FormControl } from "@chakra-ui/react";
import React from "react";
import { profilesList } from "../../data/profilesList";
import BasicInfo from "./Sections/BasicInfo";
import CertificationsSection from "./Sections/CertificationsSection";
import EducationSection from "./Sections/EducationSection";
import ProfilesSection from "./Sections/ProfilesSection";
import ProjectsSection from "./Sections/ProjectsSection";
import Skills from "./Sections/Skills";
import WorkSection from "./Sections/WorkSection";

const FormPage = ({ resumeDetails, setResumeDetails }) => {
  const handleFormChange = (e, toChange, index, name) => {
    let data = { ...resumeDetails };
    if (toChange === "name" || toChange == "email") {
      data.basic[toChange] = e.target.value;
    }
    if (toChange === "profile") {
      data.profiles[index].link = e.target.value;
    }
    if (toChange === "education") {
      data.education[index][name] = e.target.value;
    }
    if (toChange === "project") {
      data.projects[index][name] = e.target.value;
    }
    if (toChange === "work") {
      data.work[index][name] = e.target.value;
    }
    if (toChange === "certification") {
      data.certifications[index][name] = e.target.value;
    }
    if (toChange === "skills") {
      data.skills = e.target.value.split(",");
    }
    setResumeDetails(data);
  };

  const addSections = (toAdd, name, icon, index) => {
    let data = { ...resumeDetails };

    if (toAdd === "profile") {
      data.profiles.push({
        title: name,
        icon: icon,
        link: "",
      });
      profilesList.find((profile) => profile.name === name).visible = false;
    }

    if (toAdd === "education") {
      data.education.push({
        institute: "",
        degree: "",
        stream: "",
        started: "",
        ended: "",
        grade: "",
      });
    }

    if (toAdd === "project") {
      data.projects.push({
        name: "",
        description: "",
        link: "",
        started: "",
        ended: "",
        tags: "",
      });
    }

    if (toAdd === "work") {
      data.work.push({
        role: "",
        company: "",
        description: "",
        started: "",
        ended: "",
        link: "",
      });
    }

    if (toAdd === "certification") {
      data.certifications.push({
        title: "",
        link: "",
        description: "",
      });
    }

    if (toAdd === "publications") {
      data.certifications.push({
        title: "",
        link: "",
        description: "",
      });
    }

    setResumeDetails(data);
  };

  const removeSections = (toRemove, name, icon) => {
    let data = { ...resumeDetails };

    if (toRemove === "profile") {
      let profiles = data.profiles;
      profiles = profiles.filter((profile) => profile.title !== name);
      profilesList.find((profile) => profile.name === name).visible = true;
      data = { ...data, profiles };
    }

    if (toRemove === "education") {
      let education = data.education;
      education = education.filter((edu) => edu.stream !== name);
      data = { ...data, education };
    }

    if (toRemove === "project") {
      let projects = data.projects;
      projects = projects.filter((project) => project.name !== name);
      data = { ...data, projects };
    }

    if (toRemove === "work") {
      let work = data.work;
      work = work.filter((project) => project.company !== name);
      data = { ...data, work };
    }

    if (toRemove === "certification") {
      let certifications = data.certifications;
      certifications = certifications.filter(
        (certification) => certification.title !== name
      );
      data = { ...data, certifications };
    }

    if (toRemove === "publication") {
      let publications = data.publications;
      publications = publications.filter(
        (publication) => publication.title !== name
      );
      data = { ...data, publications };
    }

    setResumeDetails(data);
  };

  return (
    <form>
      <FormControl display="flex" flexDirection="column" w="full">
        {/* Basic Info */}
        <BasicInfo
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
        />

        {/* Profiles Section */}
        <ProfilesSection
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
          addSections={addSections}
          removeSections={removeSections}
        />

        {/* Education Section */}
        <EducationSection
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
          addSections={addSections}
          removeSections={removeSections}
        />

        {/* Projects Section */}
        <ProjectsSection
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
          addSections={addSections}
          removeSections={removeSections}
        />

        {/* Work Experience Section */}

        <WorkSection
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
          addSections={addSections}
          removeSections={removeSections}
        />

        {/* Certifications Section */}
        <CertificationsSection
          resumeDetails={resumeDetails}
          handleFormChange={handleFormChange}
          addSections={addSections}
          removeSections={removeSections}
        />

        {/* Skills Section */}
        <Skills handleFormChange={handleFormChange} />
      </FormControl>
    </form>
  );
};

export default FormPage;
