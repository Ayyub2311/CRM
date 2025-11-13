import {blue, green, red} from '@ant-design/colors';
import {LabelObjType} from '@crema/types/models/apps/Contact';

const labelList: LabelObjType[] = [
  {id: 311, name: 'Важное', alias: 'crema', color: red[5]},
  {id: 312, name: 'Личное', alias: 'personal', color: blue[5]},
  {id: 313, name: 'Работа', alias: 'work', color: green[5]},
];
export default labelList;
