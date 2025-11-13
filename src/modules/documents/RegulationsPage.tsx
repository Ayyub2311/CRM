import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";

const RegulationsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <DocumentsTypePage docType={messages["documents.type.regulations"]} />
  );
}

export default RegulationsPage; 