import AppCard from "@crema/components/AppCard";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppList from "@crema/components/AppList";
import TodoCell from "./TodoCell";
import { useIntl } from "react-intl";
import { TodoObjType } from "@crema/types/models/apps/Todo";
import { useEffect, useState } from "react";
import axios from "axios";

const ToDoLists = () => {
  const intl = useIntl();
const [todos, setTodos] = useState<TodoObjType[]>([]);

useEffect(() => {
  axios
      .get("/api/todo/task/list", {
        params: { type: "folder", name: "all", page: 0 },
      })
      .then((res) => setTodos(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppCard
      title={intl.formatMessage({ id: "dashboard.crm.toDoLists" })}
      className="no-card-space-ltr-rtl"
      extra={<a href="#">{intl.formatMessage({ id: "common.viewAll" })}</a>}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={todos}
          renderItem={(todo: TodoObjType) => (
            <TodoCell
              todo={{
                title: todo.title,
                status: todo.status.toString(),
                project: todo.title,
                date: todo.date || "",
                time_from: todo.scheduleMobile || "",
                assignedTo: todo.assignedTo,
                createdBy: todo.createdBy,
              }}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;


