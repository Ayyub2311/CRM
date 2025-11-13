import styled from "styled-components";
import { Card } from "antd";

export const StyledDocumentsPage = styled.div`
  padding: 32px 48px;
  background-color: #f5f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 24px 32px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const cardWidth = "1200px";

export const StyledDocumentsFormCard = styled(Card)`
  max-width: ${cardWidth};
  width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 24px;

  .ant-card-head {
    border-bottom: 1px solid #e6e6e6;
    padding: 0 24px;
  }

  .ant-card-head-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f1f1f;
  }

  .ant-form-item-label > label {
    font-weight: 500;
  }

  .ant-btn-primary {
    border-radius: 8px;
    height: 44px;
    font-weight: 500;
  }

  .ant-upload,
  .ant-upload-select {
    width: 100%;
  }
`;

export const StyledDocumentsTableCard = styled(Card)`
  max-width: ${cardWidth};
  width: 100%;
  margin: 0 auto 60px auto;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  .ant-card-head {
    border-bottom: 1px solid #e6e6e6;
    padding: 0 24px;
  }

  .ant-card-head-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f1f1f;
  }

  .ant-table {
    border-radius: 12px;
  }

  .ant-table-thead > tr > th {
    background-color: #fafafa;
    font-weight: 600;
    color: #434343;
  }

  .ant-table-tbody > tr:hover > td {
    background: #f9fafc;
  }

  .ant-tag {
    border-radius: 6px;
    font-weight: 500;
  }

  .ant-btn {
    border-radius: 6px;
  }
`;
