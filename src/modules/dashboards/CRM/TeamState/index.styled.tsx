import {Typography} from 'antd';
import AppCard from "@crema/components/AppCard";
import styled from 'styled-components';

export const StyledFullHeightCard = styled(AppCard)` 
 height: 100%;
  .ant-card-body {      
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;   
        padding: 8px 20px 16px 20px;        
  }
`;

export const StyledCardWraper = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
justify-content: space-between;
`;

export const StyledBottomWrapper = styled.div`
// height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContainerMb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;

     @media only screen and (min-width: 768px) and (max-width: 1440px) {
    width: 30px;
    height: 30px;
  }
  }
`;
export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const StyledSecondaryText = styled.div`
  width: calc(100% - 60px);
  color: ${({theme}) => theme.palette.text.secondary};
`;

export const StyledTitleWrapper = styled.span`
  padding: 2px 12px;
  margin-right: 6px;
  border-radius: 30px;

  .title {
    font-weight: ${({theme}) => theme.font.weight.medium};
    // font-size: ${({theme}) => theme.font.size.sm};
    font-size: 14px;

     @media only screen and (min-width: 768px) and (max-width: 1440px) {
    font-size: 11px;
  }
  }
`;

export const StyledTitle = styled(Typography.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%;
  font-size: 18px !important;
  margin-bottom: 0 !important;
  color: ${({theme}) => theme.palette.text.primary};

   @media only screen and (min-width: 375px) and (max-width: 1440px) {
    font-size: 14px !important;
  }
`;

export const StyledIconBtnRoot = styled.div`
  border: 1px solid ${({theme}) => theme.palette.primary.main};
  color: ${({theme}) => theme.palette.primary.main};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: ${({theme}) => theme.palette.primary.contrastText};
    background-color: ${({theme}) => theme.palette.primary.main};
  }
    svg, img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  @media only screen and (min-width: 769px) and (max-width: 1441px) {
    width: 26px;
    height: 26px;
  }
`;