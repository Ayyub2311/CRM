import {blue, green, grey, red} from '@ant-design/colors';
import {LabelObjType} from '@crema/types/models/apps/Mail';

const labelList: LabelObjType[] = [
  {
    id: 211,
    name: 'Важное',
    alias: 'important',
    color: red[5],
  },
  {
    id: 212,
    name: 'Личное',
    alias: 'personal',
    color: blue[5],
  },
  {
    id: 213,
    name: 'Работа',
    alias: 'work',
    color: green[5],
  },
  {
    id: 214,
    name: 'Социальное',
    alias: 'social',
    color: grey[5],
  },
];
export default labelList;
