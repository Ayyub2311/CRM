import AppCard from "@crema/components/AppCard";
import TopLeadersTable from "./TopLeadersTable";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import useTodoList from "@crema/mockapi/fakedb/apps/todo/useTodoList";
import { mapTodosToLeaders } from "./mapTodoToLeaders";

const TopLeaders = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const todos = useTodoList();
  const leaders = mapTodosToLeaders(todos, intl.formatMessage);

  return (
    <AppCard
      className="no-card-space-ltr-rtl"
      title={intl.formatMessage({id: "dashboard.crm.topLeaders"})}
      extra={
      <a onClick={() => navigate("/apps/todo")}> 
        {intl.formatMessage({id: "common.viewAll"})}
        </a>
        }
    >
      <TopLeadersTable data={leaders} />
    </AppCard>
  );
};

export default TopLeaders;
