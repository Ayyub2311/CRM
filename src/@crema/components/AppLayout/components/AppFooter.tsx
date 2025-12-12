import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import {
  StyledFooterBtn,
  StyledFooterBtnView,
  StyledMainFooter,
} from "./AppFooter.styled";

const AppFooter = () => {
  const { footer } = useLayoutContext();

  if (footer) {
    return (
      <StyledMainFooter>
        <p>ГУП “Информационно-ресурсный центр фондового рынка”</p>
        <StyledFooterBtnView>
          <StyledFooterBtn type="link" color="primary">
            Buy Now
          </StyledFooterBtn>
        </StyledFooterBtnView>
      </StyledMainFooter>
    );
  }
  return null;
};

export default AppFooter;
