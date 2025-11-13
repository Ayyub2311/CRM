import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";

const ProtocolsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <DocumentsTypePage docType={messages["documents.type.protocols"]} />
  );
}

export default ProtocolsPage; 