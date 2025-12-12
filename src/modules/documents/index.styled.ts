import styled from "styled-components";
import { Card } from "antd";

export const StyledDocumentsPage = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.palette.background.default}; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;

  // @media (max-width: 1200px) {
  //   padding: 24px 32px;
  // }

  @media (max-width: 768px) {
    padding: 16px 16px;
    gap: 24px;
  }
`;

const cardWidth = "1200px";

export const StyledDocumentsFormCard = styled(Card)`
  max-width: ${cardWidth};
  width: 100%;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.cardRadius}; 
  background: ${({ theme }) => theme.palette.background.paper}; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 24px;
  height: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }

  .ant-card-body {
    height: auto;
    color: ${({ theme }) => theme.palette.text.primary};


     @media (max-width: 768px) {
     & .ant-row {
    flex-direction: column;
    }

    & .ant-row, .ant-col, .ant-form-item {
    max-width: 100% !important;
    }

  & .ant-col {
  padding-left: 0 !important;
  padding-right: 0 !important;
  }

  & .ant-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
  }
  }
  }

  .ant-card-head {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider}; 
    padding: 0 24px;
  }

  .ant-card-head-title {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.primary}; 
  }

  .ant-form-item-label > label {
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary}; 
  }

  .ant-input,
  .ant-input-affix-wrapper,
  .ant-select-selector,
  .ant-picker,
  .ant-upload.ant-upload-select {
    // background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
    font-family: ${({ theme }) => theme.font.family};
  }

  .ant-pagination-item-link {
   background: ${({ theme }) => theme.palette.background.default} !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-input::placeholder,
  .ant-picker input::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .ant-btn-primary {
    border-radius: 8px;
    height: 44px;
    font-weight: 500;
    background: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.palette.primary.dark};
      border-color: ${({ theme }) => theme.palette.primary.dark};
    }
  }

  .ant-upload,
  .ant-btn,
  .ant-upload-select {
    width: 100%;
  }
`;

export const StyledDocumentsTableCard = styled(Card)`
  max-width: ${cardWidth};
  width: 100%;
  margin: 0 auto 40px auto;
  border-radius: ${({ theme }) => theme.cardRadius}; 
  background: ${({ theme }) => theme.palette.background.paper}; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  height: auto;

  .ant-card-body {
    height: auto;
    color: ${({ theme }) => theme.palette.text.primary} !important;
     overflow-x: auto; 
      & .ant-table-thead > tr > th {
    background: transparent !important; 
  }
  }

  .ant-card-head {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider}; 
    padding: 0 24px;

    @media (max-width: 768px) {
   padding: 24px;
      }
  }

    .ant-card-head-wrapper {
     @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
      }
  }

  .ant-card-head-title {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.primary}; 
    @media (max-width: 768px) {
    width: 100%;
      }
  }

  .ant-card-extra {
    @media (max-width: 768px) {
    width: 100%;
      }
  }

   .filters { 
    display: flex;
    gap: 12px;


    .ant-input {
      width: 200px; 
    }

    .ant-select {
      width: 150px; 
    }

    .ant-picker {
      width: 240px; 
    }

   @media (max-width: 1440px) {
     .ant-space-item, .ant-input,  .ant-select, .ant-picker {
      width: 150px; 
    }

     @media (max-width: 1024px) {
     .ant-space-item, .ant-input,  .ant-select, .ant-picker {
      width: 100px; 
    }
}

    @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .ant-space-item, .ant-input,
      .ant-select, .ant-select-selector,
      .ant-picker {
        width: 100%;
      }
      }

  }

  .ant-table {
  display: block;
  overflow-x: auto;
    width: 100%;
    border-radius: 12px;
    background: transparent;
    color: ${({ theme }) => theme.palette.text.primary};

    .ant-table-thead > tr > th {
      background-color: ${({ theme }) => theme.palette.background.paper};
      font-weight: 600;
      color: ${({ theme }) => theme.palette.text.primary};
    }

    .ant-table-tbody > tr:hover > td {
      background: ${({ theme }) => theme.palette.background.hover}; 
    }

    .ant-table-tbody > tr > td {
      white-space: normal !important;
      word-break: break-word;
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  .ant-tag {
    border-radius: 6px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    &.ant-tag-green {
      background-color: ${({ theme }) => theme.palette.success.light};
      color: ${({ theme }) => theme.palette.success.main};
    }
    &.ant-tag-red {
      background-color: ${({ theme }) => theme.palette.error.light};
      color: ${({ theme }) => theme.palette.error.main};
    }
  }

  .ant-btn {
    border-radius: 6px;
  }
`;
