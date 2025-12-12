import { Button, Typography } from "antd";
import { BiPencil } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { StyledText, StyledTodoCellWrapper } from "./index.styled";
import { TodoListType } from "@crema/types/models/dashboards/CRM";
import { useIntl } from "react-intl";


type Props = {
  todo: TodoListType & { project?: string; status?: string };
};

const TodoCell = ({ todo }: Props) => {
  const intl = useIntl();

  const translatedProject = todo.project
  ? intl.formatMessage({ id: todo.project })
  : todo.title
  ? intl.formatMessage({ id: todo.title })
  : "";

const translatedStatus = todo.status
  ? intl.formatMessage({ id: todo.status })
  : "";

  return (
    <StyledTodoCellWrapper>
      <div className="date-view">
        <h4 className="date-view">{todo.date.split(" ")[0]}</h4>
        <p>{todo.date.split(" ")[1]}</p>
      </div>
      <div className="contentArea">
        <div
          style={{
            flex: 1,
            marginRight: 4, 
          }}
        >
          <Typography.Title level={5}>
           {translatedProject}
            </Typography.Title>
          <StyledText>
            {todo.time_from}
            {translatedStatus}
            </StyledText>
        </div>
        <span
          style={{
            position: "relative",
          }}
        >
          <Button
            type="primary"
            shape="circle"
            className="icon-btn icon-btn-pencil"
            icon={<BiPencil />}
          />
          <Button
            type="primary"
            shape="circle"
            className="icon-btn"
            icon={<BsCheck />}
          />
        </span>
      </div>
    </StyledTodoCellWrapper>
  );
};

export default TodoCell;
