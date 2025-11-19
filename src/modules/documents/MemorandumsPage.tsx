import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";

const MemorandumsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <>
      <AppPageMeta title="Memorandums" />

      <DocumentsTypePage docType={messages["documents.type.memorandums"]} />
    </>
  );
}

export default MemorandumsPage; 
