import mock from "../../../apis/MockConfig";
import { TodoObjType } from "@crema/types/models/apps/Todo";
import useTodoList from "./useTodoList";
import folderList from "./folderList";
import { labelList, onGetLabel } from "./labelList";
// import staffList from "./staffList";
import priorityList from "./priorityList";
import statusList from "./statusList";


let todoData: TodoObjType[] = useTodoList();

const onGetTaskList = (name: string, data: TodoObjType[]): TodoObjType[] => {
  switch (name) {
    case "all": return data.filter(t => t.folderValue !== 126);
    case "starred": return data.filter(t => t.folderValue !== 126 && t.isStarred);
    case "priority": return data.filter(t => t.folderValue !== 126 && t.priority.type === 1);
    case "completed": return data.filter(t => t.folderValue !== 126 && t.status === 1003);
    case "deleted": return data.filter(t => t.folderValue === 126);
    default: {
      const folderId = folderList.find(f => f.alias === name)?.id;
      return data.filter(t => t.folderValue === folderId);
    }
  }
};

const setupListEndpoint = (url: string) => {
  mock.onGet(url).reply(config => {
    const params = config.params;
    let list: TodoObjType[] = [];

    if (params.type === "folder") {
      list = onGetTaskList(params.name, todoData);
    } else {
      const labelId = labelList.find(l => l.alias === params.name)?.id;
      list = todoData.filter(task => task.label.some(l => l.id === labelId) && task.folderValue !== 126);
    }

    const page = params.page || 0;
    const start = page * 15;
    const data = list.length > 15 ? list.slice(start, start + 15) : list;
    return [200, { data, count: list.length }];
  });
};
setupListEndpoint("/api/calendar/task/list");
setupListEndpoint("/api/todo/task/list");

mock.onGet("/api/calendar/task/").reply(config => {
  const id = parseInt(config.params.id);
  const task = todoData.find(t => t.id === id);
  return [200, task];
});
mock.onGet("/api/todoApp/task/").reply(config => {
  const id = parseInt(config.params.id);
  const task = todoData.find(t => t.id === id);
  return [200, task];
});

mock.onPut("/api/calendar/task/").reply(request => {
  const { task } = JSON.parse(request.data);
  todoData = todoData.map(t => t.id === task.id ? task : t);
  return [200, { data: todoData, task }];
});
mock.onPut("/api/todoApp/task/").reply(request => {
  const { task } = JSON.parse(request.data);
  todoData = todoData.map(t => t.id === task.id ? task : t);
  return [200, { data: todoData, task }];
});

mock.onPost("/api/calendar/compose").reply(request => {
  const { task } = JSON.parse(request.data);
  todoData = [task, ...todoData];
  return [200, task];
});
mock.onPost("/api/todoApp/compose").reply(request => {
  const { task } = JSON.parse(request.data);
  todoData = [task, ...todoData];
  return [200, task];
});

mock.onGet("/api/calendar/folders/list").reply(200, folderList);
mock.onGet("/api/calendar/labels/list").reply(200, labelList);
// mock.onGet("/api/calendar/staff/list").reply(200, staffList);
mock.onGet("/api/calendar/priority/list").reply(200, priorityList);
mock.onGet("/api/calendar/status/list").reply(200, statusList);

mock.onGet("/api/todo/folders/list").reply(200, folderList);
mock.onGet("/api/todo/labels/list").reply(200, labelList);
// mock.onGet("/api/todo/staff/list").reply(200, staffList);
mock.onGet("/api/todo/priority/list").reply(200, priorityList);
mock.onGet("/api/todo/status/list").reply(200, statusList);
