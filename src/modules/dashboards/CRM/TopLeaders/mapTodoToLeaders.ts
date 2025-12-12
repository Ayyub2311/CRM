import { TopLeaderType } from "@crema/types/models/dashboards/CRM";
import { TodoObjType } from "@crema/types/models/apps/Todo";

const statusMap: Record<number, string> = {
  1001: "todo.status.1",
  1002: "todo.status.2",
  1003: "todo.status.3",
};

export const mapTodoToLeader = (
  todo: TodoObjType,
   formatMessage: (desc: { id: string }) => string
  ): TopLeaderType => ({
  id: String(todo.id),
  teamLead: {
    id: todo.assignedTo?.id || 0,
    name: todo.assignedTo?.name || "No name",
    image: todo.assignedTo?.image || todo.image || "",
  },
  project: formatMessage({ id: todo.title}),
  team: [
    {
      id: todo.createdBy?.id || 0,
      image: todo.createdBy?.image || "",
    },
  ],
  status: `${formatMessage({ id: todo.priority?.name || ""})} / ${formatMessage({ id: statusMap[todo.status] || "" })}`,
  color: todo.priority?.color || "#ccc",
});

export const mapTodosToLeaders = (
  todos: TodoObjType[], 
  formatMessage: (desc: { id: string }) => string
): TopLeaderType[] =>
  todos.map((todo) => mapTodoToLeader(todo, formatMessage));
