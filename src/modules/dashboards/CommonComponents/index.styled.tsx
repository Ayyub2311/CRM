import styled from 'styled-components';

export const StyledFlexSuccessContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.palette.success.main} !important;
  justify-content: flex-end;
`;

export const StyledToggleContainer = styled.div`
  position: relative;
  text-align: right;
  white-space: nowrap;
  @media only screen and (min-width: 769px) and (max-width: 1579px) {
    display: none;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-bottom: 0 !important;

    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 14px !important;
    }
  }
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledIconWrapper = styled.span`
  margin-right: 12px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;

  & > img, & > svg {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  @media (min-width: 769px) and (max-width: 1025px) {
    height: 36px;
    width: 36px;
  }
`;


export const StyledDurationWrapper = styled.div`
  margin-top: 8px;
  color: ${({theme}) => theme.palette.text.secondary} !important;

  span {
    font-size: ${({theme}) => theme.font.size.sm} !important;
  }
`;

export const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xs}px) {
    width: calc(100% - 62px);
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    width: calc(100% - 70px);
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.xl}px) {
    width: calc(100% - 76px);
  }
`;

export const StyledTitleWrapper = styled.p`
  color: ${({theme}) => theme.palette.text.secondary} !important;
  font-size: 14px;
  white-space: normal;
  margin-bottom: 0;
`;

export const StyledTag = styled.span`
  border-radius: 30px;
  padding: 4px 12px;
  font-size: 12;
  display: inline-block;
  min-width: 75px;
  text-align: center;
  font-weight: ${({theme}) => theme.font.weight.medium} !important;

  @media only screen and (max-width: 1580px) and (min-width: 1200px) {
    display: none;
  }
`;
