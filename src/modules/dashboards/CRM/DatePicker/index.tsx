"use client";

import { StyledWidCalendarCard, StyledWidDateCalendar } from "./index.styled";
import enUS from "antd/es/date-picker/locale/en_US";
import ruRU from "antd/es/date-picker/locale/ru_RU";
import { useEffect, useState } from "react";
import { useLocaleContext } from '@crema/context/AppContextProvider/LocaleContextProvider'

import dayjs from "dayjs";
import "dayjs/locale/uz";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("uz", {
  months: [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
  ],
  monthsShort: [
    "Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"
  ],
  weekdays: [
    "Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"
  ],
  weekdaysShort: [
    "Yak", "Du", "Se", "Chor", "Pay", "Ju", "Shan"
  ],
  weekdaysMin: [
    "Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"
  ],
});

const uzLocal: any = {

  locale: 'uz',
  lang: {
    locale: 'uz',
    today: "Bugun",
    now: "Hozir",
    backToToday: "Bugunga qayt",
    ok: "OK",
    clear: "Tozalash",
    month: "Oy",
    year: "Yil",
    timeSelect: "Vaqtni tanlash",
    dateSelect: "Sana tanlash",
    monthSelect: "Oyni tanlash",
    yearSelect: "Yilni tanlash",
    decadeSelect: "O'n yillikni tanlash",
    yearFormat: "YYYY",
    dateFormat: "DD.MM.YYYY",
    dayFormat: "DD",
    dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "Oldingi oy",
    nextMonth: "Keyingi oy",
    previousYear: "Oldingi yil",
    nextYear: "Keyingi yil",
    previousDecade: "Oldingi o'n yillik",
    nextDecade: "Keyingi o'n yillik",
    previousCentury: "Oldingi asr",
    nextCentury: "Keyingi asr",
  },

  timePickerLocale: {
    placeholder: 'Vaqtni tanlash',
  }

};

const antLocaleMap: Record<string, any> = {
  en: enUS,
  ru: ruRU,
  uz: uzLocal,
};

interface DateSelectorProps {
  locale?: "en" | "ru" | "uz";
  appLocale?: "en" | "ru" | "uz";
}
const DateSelector: React.FC = () => {

  const { locale } = useLocaleContext();

  const currentLocaleKey: 'en' | 'ru' | 'uz' = locale?.locale as any || 'uz';

  dayjs.locale(currentLocaleKey);

  const antLocale = antLocaleMap[currentLocaleKey];

  return (
    <StyledWidCalendarCard heightFull className="no-card-space">
      <StyledWidDateCalendar locale={antLocale} />
    </StyledWidCalendarCard>
  );
};

export default DateSelector;
