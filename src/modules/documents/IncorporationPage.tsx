import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";

const IncorporationPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <DocumentsTypePage docType={messages["documents.type.incorporation"]} />
  );
}

export default IncorporationPage; 
