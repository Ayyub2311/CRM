import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";


const IncorporationPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <>
      <AppPageMeta title="Incorporation Documents" />

      <DocumentsTypePage docType={messages["documents.type.incorporation"]} />
    </>
  );
}

export default IncorporationPage; 
