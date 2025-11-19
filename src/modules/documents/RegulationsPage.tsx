import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";

const RegulationsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
     <>
          <AppPageMeta title="Regulations" />
    
          <DocumentsTypePage docType={messages["documents.type.regulations"]} />
        </>
  );
}

export default RegulationsPage; 