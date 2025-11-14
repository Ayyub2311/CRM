import { TopLeaderType } from "@crema/types/models/dashboards/CRM";
import { TodoObjType } from "@crema/types/models/apps/Todo";

const statusMap: Record<number, string> = {
  1001: "Pending",
  1002: "In Progress",
  1003: "Completed",
};

export const mapTodoToLeader = (todo: TodoObjType): TopLeaderType => ({
  id: String(todo.id),
  teamLead: {
    id: todo.assignedTo?.id || 0,
    name: todo.assignedTo?.name || "No name",
    image: todo.assignedTo?.image || todo.image || "",
  },
  project: todo.title,
  team: [
    {
      id: todo.createdBy?.id || 0,
      image: todo.createdBy?.image || "",
    },
  ],
  status: `${todo.priority?.name || "—"} / ${statusMap[todo.status] || "Unknown"}`,
  color: todo.priority?.color || "#ccc",
});

export const mapTodosToLeaders = (todos: TodoObjType[]): TopLeaderType[] =>
  todos.map(mapTodoToLeader);
