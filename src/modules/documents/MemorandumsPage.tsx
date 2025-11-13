import React from "react";
import DocumentsTypePage from "./DocumentsTypePage";
import { useIntl } from "react-intl";

const MemorandumsPage: React.FC = () => {
  const { messages } = useIntl();

  return (
    <DocumentsTypePage docType={messages["documents.type.memorandums"]} />
  );
}

export default MemorandumsPage; 
