import React,{ useState, useMemo } from 'react';
import { dateFnsLocalizer } from 'react-big-calendar'
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import './calendar.css';
import CustomToolbar from './CustomToolbar';
import TaskItem from './TaskItem';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import ru from 'date-fns/locale/ru';
import {StyledCalendar} from "./Calendar.style.jsx";
import { useLocaleContext } from '@crema/context/AppContextProvider/LocaleContextProvider';


const DnDCalendar = withDragAndDrop(StyledCalendar)

const uzFormats = {
  weekdayFormat: (date: Date) => {
    const weekdays = ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sh"];
    return weekdays[date.getDay()];
  },
  monthHeaderFormat: (date: Date) => {
    const months = [
      "Yanvar","Fevral","Mart","Aprel","May","Iyun",
      "Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"
    ];
    return months[date.getMonth()];
  },
  dayFormat: (date: Date) => {  
    const weekdays = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];
    return weekdays[date.getDay()];
  },
  agendaDateFormat: (date: Date) => {
    const months = [
      "Yanvar","Fevral","Mart","Aprel","May","Iyun",
      "Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  },
  agendaTimeRangeFormat: ({ start, end }: { start: Date; end: Date }) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(start.getHours())}:${pad(start.getMinutes())} - ${pad(end.getHours())}:${pad(end.getMinutes())}`;
  }
};


const locales = {
  'en-US': enUS,
  'ru': ru,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const TaskCalender = ({ taskList, onUpdateTask, onSetFilterText }) => {
  const { locale } = useLocaleContext(); 
  
  const currentLocale = locale?.locale === 'ru' ? ru : enUS; 


  const navigate = useNavigate();
  const { folder, label } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSelectDate = ({ start }) => {
    console.log('start: ', start);
    setSelectedDate(start);
  };

  const onOpenAddTask = (data) => {
    if (data) {
      onViewTaskDetail(data);
    } else {
      console.log('selectedDate', selectedDate);
    }
  };
  const resizeEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
    console.log('resizeEvent: ', event, start, end);
  };

  const onViewTaskDetail = (task) => {
    if (folder) navigate(`/apps/calender/${folder}/${task.id}`);
    if (label) navigate(`/apps/calender/label/${label}/${task.id}`);
  };
  const moveEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
  };

  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: new Date(task.startDate),
          end: new Date(task.endDate),
        };
      });
    return [];
  };
  return (
      <DnDCalendar
      localizer={localizer}
      culture={locale?.locale}
      events={getEvents()}
      formats={locale?.locale === 'uz' ? uzFormats : undefined}
      // themeVariant='dark'
      views={['month', 'agenda']}
      tooltipAccessor={undefined}
      showMultiDayTimes
      resizable
      onEventResize={resizeEvent}
      onEventDrop={moveEvent}
      onSelectEvent={onOpenAddTask}
      components={{
        toolbar: (props) => (
          <AppsHeader>
            <CustomToolbar onSetFilterText={onSetFilterText} {...props} />
          </AppsHeader>
        ),
        event: ({ event }) => <TaskItem item={event} />,
      }}
      popup
      selectable
      onSelectSlot={onSelectDate}
      defaultView='month'
    />

  );
};
export default TaskCalender;
TaskCalender.propTypes = {
  taskList: PropTypes.any,
  onUpdateTask: PropTypes.func,
  onSetFilterText: PropTypes.func,
};