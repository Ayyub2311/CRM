import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";

const ProtocolsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <>
      <AppPageMeta title="Protocols" />

      <DocumentsTypePage docType={messages["documents.type.protocols"]} />
    </>
  );
}

export default ProtocolsPage; 