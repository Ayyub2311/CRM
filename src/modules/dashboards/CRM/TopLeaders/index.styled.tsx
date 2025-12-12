import {Typography} from 'antd';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  
  .ant-typography {
  font-size: 16px !important;

  @media screen and (max-width: 1440px) {
    font-size: 14px !important;
  }
     @media screen and (max-width: 768px) {
    font-size: 12px !important;
  }
  }
`;



export const StyledText = styled(Typography.Text)`
  margin-top: 2px;
  color: ${({theme}) => theme.palette.text.secondary};
`;

export const StyledDot = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
`;

export const StyledAvatarWrapper = styled.div`
  .ant-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
`;