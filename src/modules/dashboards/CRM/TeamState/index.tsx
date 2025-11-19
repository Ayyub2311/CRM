import AppCard from "@crema/components/AppCard";
import { Avatar, Switch } from "antd";

import {
  StyledFullHeightCard,
  StyledContainer,
  StyledContainerMb,
  StyledFlex,
  StyledFlexWrapper,
  StyledIconBtnRoot,
  StyledSecondaryText,
  StyledTitle,
  StyledTitleWrapper,
  StyledBottomWrapper,
  StyledCardWraper,
} from "./index.styled";
import { MdEdit } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { TeamStateDataType } from "@crema/types/models/dashboards/CRM";

type Props = {
  data: TeamStateDataType;
};
const TeamState = ({ data }: Props) => {
  return (
    <StyledFullHeightCard>

<StyledCardWraper>
  <StyledFlexWrapper>
        <StyledSecondaryText>
          <StyledTitle level={3}>{data.name}</StyledTitle>
          <span>{data.duration}</span>
        </StyledSecondaryText>
        <Switch defaultChecked={data.status} />
      </StyledFlexWrapper>

<StyledBottomWrapper >
 <StyledContainerMb>
        {data.tags.map((data, index) => (
          <StyledTitleWrapper
            key={"team-" + index}
            style={{ backgroundColor: data.color + "21", color: data.color }}
          >
            <span className="title">{data.title}</span>
          </StyledTitleWrapper>
        ))}
      </StyledContainerMb>

      <StyledFlex>
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: "#fff", backgroundColor: "#2997ff99" }}
        >
          {data.members.map((data, index) => (
            <Avatar
              // size={40}
              key={"member-" + index}
              alt={data.name}
              src={data.image}
            />
          ))}
        </Avatar.Group>

        <StyledContainer>
          <div>
            <StyledIconBtnRoot>
              <MdEdit />
            </StyledIconBtnRoot>
          </div>

          <div style={{ marginLeft: 6 }}>
            <StyledIconBtnRoot>
              <BsArrowUpRight />
            </StyledIconBtnRoot>
          </div>
        </StyledContainer>
      </StyledFlex>
</StyledBottomWrapper >
</StyledCardWraper>
      
     
    </StyledFullHeightCard>
  );
};

export default TeamState;
