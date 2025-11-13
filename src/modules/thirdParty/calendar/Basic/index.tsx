import React, {JSXElementConstructor, ReactElement} from 'react';
import {dayjsLocalizer} from 'react-big-calendar';
import events from '../events';
import dayjs from 'dayjs';
import {StyledCalendar} from '../index.styled';

// const allViews = Object.keys(Views).map((k) => Views[k]);

interface ColoredDateCellWrapperProps {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
}

const ColoredDateCellWrapper: React.FC<ColoredDateCellWrapperProps> = ({
  children,
}) =>
  React.cloneElement(React.Children.only(children) as any, {
    style: {
      backgroundColor: 'lightblue',
    },
  });

const localizer = dayjsLocalizer(dayjs);
const Basic = () => {
  return (
    <StyledCalendar
      events={events}
      // views={allViews}
      step={60}
      showMultiDayTimes
      defaultDate={new Date(2021, 10, 1)}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
      }}
      localizer={localizer}
    />
  );
};
export default Basic;
