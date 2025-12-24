"use client";

import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Select, message } from 'antd';
import { saveAs } from 'file-saver';
import * as docx from 'docx';
import { v4 as uuidv4 } from 'uuid';
import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from '../index.styled';
import enUS from 'antd/es/date-picker/locale/en_US';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import "dayjs/locale/uz";
import "dayjs/locale/ru";
import "dayjs/locale/en";
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

const { TextArea } = Input;
const { Option } = Select;

type FieldOption = { name: string; value: string };

type SimpleField = {
  name: string;
  label: string;
  type?: 'input' | 'textarea' | 'date' | 'select';
  col?: number;
  placeholder?: string;
  options?: FieldOption[];
  clone?: false;
  groupId?: string;
};

type CloneField = {
  clone: true;
  cloneName: string;
  field: SimpleField[];
  label?: string;
  col?: number;
}
type Field = SimpleField | CloneField;
type Group = { title: string; fields: Field[] };

const isCloneField = (field: Field): field is CloneField => field.clone === true;


const groups: Group[] = [
  {
    title: 'info.titleCommon',
    fields: [
      { name: 'fullName', label: 'info.fullName', type: 'input', col: 24 },
      { name: 'birthPlace', label: 'info.birthPlace', type: 'input', col: 12 },
      { name: 'ethnicity', label: 'info.ethnicity', type: 'input', col: 12 },
      { name: 'homeAddress', label: 'info.homeAddress', type: 'input', col: 24 },
      { name: 'citizenship', label: 'info.citizenship', type: 'input', col: 12 },
      {
        name: 'maritalStatus', label: 'info.maritalStatus', type: 'select', col: 12,
        options: [
          { name: 'info.single', value: 'single' },
          { name: 'info.married', value: 'married' },
          { name: 'info.divorced', value: 'divorced' },
          { name: 'info.widowed', value: 'widowed' },
        ]
      },
      { name: 'birthDate', label: 'info.birthDate', type: 'date', col: 12, placeholder: 'common.selectDate' },
      { name: 'passportNumber', label: 'info.passportNumber', type: 'input', col: 12 },
      { name: 'passportIssueDate', label: 'info.passportIssueDate', type: 'date', col: 12, placeholder: 'common.selectDate' },
      { name: 'passportIssueTerm', label: 'info.passportIssueTerm', type: 'input', col: 12, placeholder: 'common.selectDate' },


    ],
  },
  {
    title: 'info.titleLanguages',
    fields: [

      { name: 'languageNative', label: 'info.languageNative', type: 'input', col: 12 },
      {
        name: 'languageNativeProficiency', label: 'info.languageProficiency', type: 'select', col: 12,
        options: [
          { name: 'info.beginner', value: 'Beginner' },
          { name: 'info.intermediate', value: 'Intermediate' },
          { name: 'info.fluent', value: 'Fluent' },
        ]
      },

      { name: 'languageSecond', label: 'info.languageSecond', type: 'input', col: 12, groupId: 'languages' },
      {
        name: 'languageProficiency', label: 'info.languageProficiency', type: 'select', col: 12,
        options: [
          { name: 'info.beginner', value: 'Beginner' },
          { name: 'info.intermediate', value: 'Intermediate' },
          { name: 'info.fluent', value: 'Fluent' },
        ],
        groupId: 'languages',
      },
    ],
  },
  {
    title: 'info.titleRelatives',
    fields: [
      { name: 'fullNameRelative', label: 'info.fullNameRelative', type: 'input', col: 12, groupId: 'relatives' },
      {
        name: 'relationship', label: 'info.relationship', type: 'select', col: 12,
        options: [
          { name: 'info.father', value: 'father' },
          { name: 'info.mother', value: 'mother' },
          { name: 'info.sister', value: 'sister' },
          { name: 'info.brother', value: 'brother' },
        ],
        groupId: 'relatives',
      },
    ],
  },
  {
    title: 'info.titleEducation',
    fields: [
      { name: 'educationSpecialty', label: 'info.educationSpecialty', type: 'input', col: 12 },
      { name: 'mainSpecialty', label: 'info.mainSpecialty', type: 'input', col: 12 },


      { name: 'higherEducationInstitutionName', label: 'info.higherEducationInstitutionName', type: 'input', col: 12, groupId: 'educations' },
      { name: 'higherEducationInstitutionEndDate', label: 'info.higherEducationInstitutionEndDate', type: 'date', col: 12, placeholder: 'common.selectDate', groupId: 'educations' },
      { name: 'educationLevel', label: 'info.educationLevel', type: 'input', col: 12 },
      { name: 'secondaryEducationInstitutionName', label: 'info.secondaryEducationInstitutionName', type: 'input', col: 12 },
      { name: 'secondaryEducationInstitutionEndDate', label: 'info.secondaryEducationInstitutionEndDate', type: 'date', col: 12, placeholder: 'common.selectDate' },
      { name: 'faculty', label: 'info.faculty', type: 'input', col: 12 },
      { name: 'department', label: 'info.department', type: 'input', col: 12 },
      { name: 'diplomaNumber', label: 'info.diplomaNumber', type: 'input', col: 12 },
      { name: 'certificateNumber', label: 'info.certificateNumber', type: 'input', col: 12 },
      { name: 'license', label: 'info.license', type: 'input', col: 12 },
    ],
  },
  {
    title: 'info.titleWork',
    fields: [
      { name: 'totalWorkExperience', label: 'info.totalWorkExperience', type: 'input', col: 12 },
      { name: 'continiousWorkExperience', label: 'info.continiousWorkExperience', type: 'input', col: 12 },
      { name: 'lastWorkplace', label: 'info.lastWorkplace', type: 'input', col: 12 },
      { name: 'position', label: 'info.position', type: 'input', col: 12 },
      // { name: 'dismissalDate', label: 'info.dismissalDate', type: 'date', col: 12, placeholder: 'common.selectDate' },
      // { name: 'dismissalReason', label: 'info.dismissalReason', type: 'input', col: 12 },
    ],
  },
  {
    title: 'info.titleMilitary',
    fields: [
      { name: 'accountGroup', label: 'info.accountGroup', type: 'input', col: 12 },
      { name: 'accountCategory', label: 'info.accountCategory', type: 'input', col: 12 },
      { name: 'accountComposition', label: 'info.accountComposition', type: 'input', col: 12 },
      { name: 'militaryRank', label: 'info.militaryRank', type: 'input', col: 12 },
      { name: 'militarySpecialty', label: 'info.militarySpecialty', type: 'input', col: 12 },
      { name: 'militaryQualification', label: 'info.militaryQualification', type: 'input', col: 12 },
      { name: 'militaryUnit', label: 'info.militaryUnit', type: 'input', col: 12 },
      { name: 'militaryAccount', label: 'info.militaryAccount', type: 'input', col: 12 },
      { name: 'dateAssignment', label: 'info.dateAssignment', type: 'date', col: 12, placeholder: 'common.selectDate' },
      { name: 'militarySection', label: 'info.militarySection', type: 'input', col: 12 },
      { name: 'militaryProfession', label: 'info.militaryProfession', type: 'input', col: 12 },
      { name: 'militaryPayGrade', label: 'info.militaryPayGrade', type: 'input', col: 12 },
      { name: 'militaryBase', label: 'info.militaryBase', type: 'input', col: 12 },
      { name: 'vacationType', label: 'info.vacationType', type: 'input', col: 12 },
      { name: 'vacationReason', label: 'info.vacationReason', type: 'input', col: 12 },
      { name: 'returnReason', label: 'info.returnReason', type: 'input', col: 12 },
      { name: 'militaryPeriod', label: 'info.militaryPeriod', type: 'input', col: 12 },
      { name: 'militaryDate', label: 'info.militaryDate', type: 'date', col: 12, placeholder: 'common.selectDate' },
      { name: 'specialties', label: 'info.specialties', type: 'input', col: 24 },
      { name: 'reason', label: 'info.reason', type: 'input', col: 12 },
      { name: 'dismissal', label: 'info.dismissal', type: 'input', col: 12 },
    ],
  },
];


const getDatePickerLocale = (placeholder: string, currentLocale: string) => {
  const base = antLocaleMap[currentLocale] || enUS;

  return {
    ...base,
    lang: {
      ...base.lang,
      placeholder: placeholder,
      rangePlaceholder: [placeholder, placeholder],
    },
  };
};

const Information = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [allData, setAllData] = useState<Record<number, any>>({ 0: {} });
  const [clonedGroups, setClonedGroups] = useState<Record<string, any[]>>({
    relatives: [{ uuid: uuidv4() }],
    languages: [{ uuid: uuidv4() }],
    educations: [{ uuid: uuidv4() }],
  });

  const [form] = Form.useForm();
  const intl = useIntl();
  React.useEffect(() => {
    dayjs.locale(intl.locale);
  }, [intl.locale]);

   const { locale } = useLocaleContext();
  
    const currentLocaleKey: 'en' | 'ru' | 'uz' = locale?.locale as any || 'uz';
  
    dayjs.locale(currentLocaleKey);
  
    const antLocale = antLocaleMap[currentLocaleKey];

  const downloadWord = (allData: any, groups: Group[]) => {
    let counter = 1;

    const generateParagraphs = (data: any, groupFields: Group[], parentLabel = ''): docx.Paragraph[] => {
      const paragraphs: docx.Paragraph[] = [];

      const getFieldLabel = (key: string): string => {
        for (const group of groupFields) {
          for (const field of group.fields) {
            if ('clone' in field && field.clone) {
              for (const f of field.field) {
                if (f.name === key) return intl.formatMessage({ id: f.label });
              }
            } else if (field.name === key) return intl.formatMessage({ id: field.label });
          }
        }
        return key;
      };

      if (Array.isArray(data)) {

        data.forEach(item => {
          if (item && typeof item === 'object') {
            paragraphs.push(...generateParagraphs(item, groupFields, parentLabel));
          } else {
            paragraphs.push(new docx.Paragraph(`${counter}. ${parentLabel}: ${item ?? '-'}`));
            counter++;
          }
        });
      } else if (data && typeof data === 'object') {
        for (const [key, value] of Object.entries(data)) {

          if (!isNaN(Number(key)) || /^[0-9a-fA-F-]{8,36}$/.test(key)) {
            paragraphs.push(...generateParagraphs(value, groupFields, parentLabel));
            continue;
          }

          const label = getFieldLabel(key);
          const fieldGroupId = groupFields
            .flatMap(g => g.fields)
            .find(f => f.name === key)?.groupId;

          const fullLabel = parentLabel && parentLabel !== fieldGroupId
            ? `${parentLabel} > ${label}`
            : label;

          if (Array.isArray(value) || (value && typeof value === 'object' && !dayjs.isDayjs(value))) {
            paragraphs.push(...generateParagraphs(value, groupFields, fullLabel));
          } else {
            const displayValue = dayjs.isDayjs(value)
             ? value.locale(intl.locale).format('YYYY-MM-DD') 
             : (value ?? '-');

            const spacing = counter < 10 ? '   ' : ' ';
            paragraphs.push(
              new docx.Paragraph({
                children: [
                  new docx.TextRun({
                    text: `${counter}.${spacing}${fullLabel}: ${displayValue}`,
                    size: 24,
                  }),
                ],
              })
            );


            counter++;
          }
        }
      }


      return paragraphs;
    };

    const doc = new docx.Document({
      sections: [{ children: generateParagraphs(allData, groups) }],
    });

    docx.Packer.toBlob(doc).then(blob => saveAs(blob, 'UserInfo.docx'));
  };


  const addGroupItem = (groupId: string) => {
    setClonedGroups(prev => ({
      ...prev,
      [groupId]: [...(prev[groupId] || []), { uuid: uuidv4() }]
    }));
  };

  const removeGroupItem = (groupId: string, uuid: string) => {
    setClonedGroups(prev => ({
      ...prev,
      [groupId]: prev[groupId].filter(item => item.uuid !== uuid)
    }));
  };

  const groupedFields = (fields: Field[]) => {
    const groups: Record<string, SimpleField[]> = {};
    const singles: SimpleField[] = [];

    fields.forEach(f => {
      if ("clone" in f) return;

      if (f.groupId) {
        if (!groups[f.groupId]) groups[f.groupId] = [];
        groups[f.groupId].push(f);
      } else {
        singles.push(f);
      }
    });

    return { groups, singles };
  };


  const { groups: fieldGroups, singles } = groupedFields(groups[currentGroup].fields);

  const renderField = (field: SimpleField, namePrefix: any[] = []) => (
    <Col xs={24} md={field.col || 12} key={[...namePrefix, field.name].join('_')}>
      <Form.Item name={[...namePrefix, field.name]} label={<IntlMessages id={field.label} />}>
        {field.type === 'input' && <Input />}
        {field.type === 'textarea' && <TextArea rows={4} />}
        {field.type === 'date' && (
          <DatePicker
            style={{ width: '100%' }}
            placeholder={field.placeholder ? intl.formatMessage({ id: field.placeholder }) : undefined}
            locale={antLocale}
          />
        )}
        {field.type === 'select' && (
          <Select>
            {field.options?.map(o => (
              <Option key={o.value} value={o.value}>
                {intl.formatMessage({ id: o.name })}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>
    </Col>
  );

  const onNext = async () => {
    try {
      const values = await form.validateFields();
      setAllData({ ...allData, [currentGroup]: values });
      if (currentGroup < groups.length - 1) setCurrentGroup(currentGroup + 1);
    } catch { }
  };

  const onBack = async () => {
    try {
      const values = await form.validateFields();
      setAllData({ ...allData, [currentGroup]: values });
      if (currentGroup > 0) setCurrentGroup(currentGroup - 1);
    } catch { }
  };

  React.useEffect(() => {
    const fields = groups[currentGroup].fields.filter(
      (f): f is SimpleField => !("clone" in f)
    );


    const expectedGroups: Record<string, any[]> = {};

    fields.forEach(f => {
      if (f.groupId) {
        const existing = clonedGroups[f.groupId];
        if (!existing || existing.length === 0) {
          expectedGroups[f.groupId] = [{ uuid: uuidv4() }];
        }
      }
    });

    if (Object.keys(expectedGroups).length > 0) {
      setClonedGroups(prev => ({ ...prev, ...expectedGroups }));
    }

    form.setFieldsValue(allData[currentGroup] || {});
  }, [currentGroup]);

  return (
    <StyledUserProfileForm form={form} onFinish={onNext} layout='vertical'>
      <StyledUserProfileFormTitle>
        {intl.formatMessage({ id: groups[currentGroup].title })}
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={24}>

        {singles.map(f => renderField(f))}

        {Object.entries(fieldGroups).map(([groupId, fields]) =>
          clonedGroups[groupId]?.map((item, index, arr) => (
            <React.Fragment key={item.uuid}>
              {fields.map(f => (
                <Col xs={24} md={f.col || 12} key={f.name + item.uuid} style={{ marginBottom: 16 }}>
                  <Form.Item
                    name={[groupId, item.uuid, f.name]}
                    label={<IntlMessages id={f.label} />}
                  >
                    {f.type === 'input' && <Input />}
                    {f.type === 'textarea' && <TextArea rows={4} />}
                    {f.type === 'date' && (
                      <DatePicker
                        style={{ width: '100%' }}
                        placeholder={f.placeholder ? intl.formatMessage({ id: f.placeholder }) : undefined}
                        locale={antLocale}
                      />
                    )}
                    {f.type === 'select' && (
                      <Select>
                        {f.options?.map(o => (
                          <Option key={o.value} value={o.value}>
                            {intl.formatMessage({ id: o.name })}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              ))}

              <Col xs={24} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <Button danger onClick={() => removeGroupItem(groupId, item.uuid)}>
                  <IntlMessages id="common.delete" />
                </Button>

                {index === arr.length - 1 && (
                  <Button type="dashed" onClick={() => addGroupItem(groupId)}>
                    <IntlMessages id="common.add" />
                  </Button>
                )}
              </Col>
            </React.Fragment>
          ))
        )}



        <Col xs={24}>
          <StyledUserProfileGroupBtn style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {currentGroup > 0 && (
              <Button type="default" onClick={onBack}>
                <IntlMessages id="common.back" />
              </Button>
            )}
            <Button type="primary" htmlType="submit">
              <IntlMessages
                id={
                  groups.length > 1
                    ? currentGroup < groups.length - 1
                      ? 'common.next'
                      : 'common.save'
                    : 'common.save'
                }
              />
            </Button>

            {currentGroup === groups.length - 1 && (
              <Button type="default" onClick={() => downloadWord(allData, groups)}>
                <IntlMessages id="common.download" />
              </Button>
            )}
          </StyledUserProfileGroupBtn>
        </Col>

      </AppRowContainer>
    </StyledUserProfileForm>
  );
};



export default Information;
