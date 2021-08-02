// Import resources
import React from "react";
import ContactListTable from "../components/ContactListTable";
import CustomCard from "../components/CustomCard";
import PageCol from "../components/PageCol";
import PageSection from "../components/PageSection";

// Component
function Home() {
  // Return
  return (
    <>
      {/** Section - Project details */}
      <PageSection sectionClass="section-proj-details" isFluid>
        <PageCol colClass="col-md-12">
          <div className="text-center">
            <h2>Reactjs CRUD With Firebase</h2>
            <p>
              A simple app to create, read, update and delete databae records.
            </p>
          </div>
        </PageCol>
      </PageSection>

      {/** Section - Project demo */}
      <PageSection sectionClass="section-proj-demo">
        <PageCol colClass="col-md-6 offset-md-3">
          <CustomCard className="shadow">
            {/** Component */}
            <ContactListTable />
          </CustomCard>
        </PageCol>
      </PageSection>
    </>
  );
}

// Export
export default Home;
