import AppCard from "@crema/components/AppCard";
import TopLeadersTable from "./TopLeadersTable";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import todoList from "@crema/mockapi/fakedb/apps/todo/todoList";
import { mapTodosToLeaders } from "./mapTodoToLeaders";

const TopLeaders = () => {
  const { messages } = useIntl();
  const navigate = useNavigate();
  const leaders = mapTodosToLeaders(todoList);

  return (
    <AppCard
      className="no-card-space-ltr-rtl"
      title={messages["dashboard.crm.topLeaders"] as string}
      extra={<a onClick={() => navigate("/apps/todo")}>{messages["common.viewAll"]}</a>}
    >
      <TopLeadersTable data={leaders} />
    </AppCard>
  );
};

export default TopLeaders;
