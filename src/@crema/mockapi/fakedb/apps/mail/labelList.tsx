import {blue, green, grey, red} from '@ant-design/colors';
import {LabelObjType} from '@crema/types/models/apps/Mail';

const labelList: LabelObjType[] = [
  {
    id: 211,
    name: 'todo.label.1',
    alias: 'important',
    color: red[5],
  },
  {
    id: 212,
    name: 'todo.label.2',
    alias: 'personal',
    color: blue[5],
  },
  {
    id: 213,
    name: 'todo.label.3',
    alias: 'work',
    color: green[5],
  },
  {
    id: 214,
    name: 'todo.label.4',
    alias: 'social',
    color: grey[5],
  },
];
export default labelList;
