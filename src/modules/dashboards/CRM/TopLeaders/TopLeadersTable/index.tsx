import {
  StyledAvatarWrapper,
  StyledDot,
  StyledFlex,
  StyledText,
} from "../index.styled";
import { Avatar, Typography } from "antd";
import { StyledTicketSupportTable } from "../../TicketSupport/index.styled";
import { ColumnsType } from "antd/es/table";
import { TopLeaderType } from "@crema/types/models/dashboards/CRM";

type Props = {
  data: TopLeaderType[];
};

const columns: ColumnsType<TopLeaderType> = [
  {
    title: "Назначено",
    dataIndex: "id",
    key: "id",
    render: (_, record) => (
      <StyledFlex>
        <Avatar style={{ marginRight: 14, width: 44, height: 44 }} src={record.teamLead.image} />
        <div style={{ flex: 1 }}>
          <Typography.Title
            level={5}
            style={{
              display: "block",
              width: 110,
              whiteSpace: "normal",
              wordBreak: "break-word",
              margin: 0,
            }}
          >
            {record.teamLead.name}
          </Typography.Title>
        </div>
      </StyledFlex>
    ),
  },
  {
    title: "Название задачи",
    dataIndex: "project",
    key: "project",
    align: "left",
    render: (project: string) => (
      <StyledFlex>
        <div style={{ flex: 2 }}>
          <Typography.Text
            style={{
              display: "block",
              width: 330,
              whiteSpace: "normal",
              wordBreak: "break-word",
              margin: 0,
            }}
          >
            {project || "No title"}
          </Typography.Text>
        </div>
      </StyledFlex>
    ),
  },
  
  {
    title: "Создал",
    dataIndex: "team",
    key: "team",
    align: "center",
    render: (data) => (
      <StyledAvatarWrapper>
        <Avatar.Group maxCount={2} style={{ justifyContent: "center" }}>
          {data.map((d) => (
            <Avatar size={40} key={d.id} src={d.image} />
          ))}
        </Avatar.Group>
      </StyledAvatarWrapper>
    ),
  },
  {
    title: "Status / Priority",
    dataIndex: "status",
    key: "status",
    render: (status, record) => (
      <StyledFlex style={{ alignItems: "center", gap: 8 }}>
        <StyledDot style={{ backgroundColor: record.color }} />
        <StyledText>{status}</StyledText>
      </StyledFlex>
    ),
  },
];

const TopLeadersTable = ({ data }: Props) => (
  <StyledTicketSupportTable scroll={{ x: "auto", y: 268 }} hoverColor data={data} columns={columns} />
);

export default TopLeadersTable;
