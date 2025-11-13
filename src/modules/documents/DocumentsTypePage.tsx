import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Upload,
  Table,
  Tag,
  message,
} from "antd";
import {
  UploadOutlined,
  FileWordOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { StyledDocumentsPage, StyledDocumentsFormCard, StyledDocumentsTableCard } from "./index.styled";
import { useIntl, FormattedMessage } from "react-intl";

type Status = "Активный" | "Неактивный";

interface DocumentItem {
  key: string;
  name: string;
  date: string;
  description: string;
  status: Status;
  wordFile?: string;
  pdfFile?: string;
}

interface Props {
  docType: string;
}

const { Option } = Select;
const { TextArea } = Input;

const DocumentsTypePage: React.FC<Props> = ({ docType }) => {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [form] = Form.useForm();
  const { messages } = useIntl();

  const handleFinish = (values: any) => {
    const newDoc: DocumentItem = {
      key: Date.now().toString(),
      name: values.name,
      date: values.date.format("DD.MM.YYYY"),
      description: values.description,
      status: values.status,
      wordFile: values.wordFile?.file?.name,
      pdfFile: values.pdfFile?.file?.name,
    };

    setDocuments([newDoc, ...documents]);
    form.resetFields();
    message.success(`${docType} ${messages["documents.addedSuccessfully"]}`);
  };

  const columns = [
    {
      title: messages["documents.name"],
      dataIndex: "name",
      key: "name",
    },
    {
      title: messages["documents.date"],
      dataIndex: "date",
      key: "date",
    },
    {
      title: messages["documents.description"],
      dataIndex: "description",
      key: "description",
    },
    {
      title: messages["documents.status"],
      dataIndex: "status",
      key: "status",
      render: (status: Status) =>
        status === "Активный" ? (
          <Tag color="green">{messages["documents.status.active"]}</Tag>
        ) : (
          <Tag color="red">{messages["documents.status.inactive"]}</Tag>
        ),
    },
    {
      title: messages["documents.files"],
      key: "files",
      render: (_: any, record: DocumentItem) => (
        <Space>
          {record.wordFile && (
            <Button
              icon={<FileWordOutlined />}
              size="small"
              href={`#${record.wordFile}`}
            >
              Word
            </Button>
          )}
          {record.pdfFile && (
            <Button
              icon={<FilePdfOutlined />}
              size="small"
              href={`#${record.pdfFile}`}
            >
              PDF
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <StyledDocumentsPage>
      <StyledDocumentsFormCard title={`${messages["documents.create"]} ${docType}`} bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ status: "Активный" }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={messages["documents.name"]}
                name="name"
                rules={[{ required: true, message: messages["documents.name.required"]  }]}
              >
                <Input placeholder={messages["documents.name.placeholder"]} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label={messages["documents.status"]} name="status">
                <Select>
                  <Option value="Активный">{messages["documents.status.active"]}</Option>
                  <Option value="Неактивный">{messages["documents.status.inactive"]}</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={messages["documents.date"]}
                name="date"
                rules={[{ required: true, message: messages["documents.date.required"] }]}
              >
                <DatePicker
                  format="DD.MM.YYYY"
                  style={{ width: "100%" }}
                  placeholder={messages["documents.date.placeholder"]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label={messages["documents.description"]} name="description">
            <TextArea rows={3} placeholder={messages["documents.description.placeholder"]} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label={messages["documents.wordFile"]} name="wordFile">
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>{messages["documents.uploadWord"]}</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={messages["documents.pdfFile"]} name="pdfFile">
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>{messages["documents.uploadPdf"]}</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
            {messages["documents.addDocument"]}
            </Button>
          </Form.Item>
        </Form>
      </StyledDocumentsFormCard>

      <StyledDocumentsTableCard   title={`${docType} — ${messages["documents.allDocuments"]}`} bordered={false}>
        <Table columns={columns} dataSource={documents} pagination={{ pageSize: 5 }} />
      </StyledDocumentsTableCard>
    </StyledDocumentsPage>
  );
};

export default DocumentsTypePage;
