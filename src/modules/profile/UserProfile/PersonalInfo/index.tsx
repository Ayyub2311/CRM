import { useState } from "react";
import { Form, Col, Input, Button } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import { useDropzone } from "react-dropzone";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadBtnView,
  StyledInfoUploadContent,
} from "./index.styled";
import { StyledUserProfileGroupBtn } from "../index.styled";
import { useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";


const PersonalInfo = () => {
  const { formatMessage } = useIntl();
  const { user } = useAuthUser();

  const [userImage, setUserImage] = useState("/assets/images/placeholder.jpg");

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage("/assets/images/placeholder.jpg");
  };

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        ...user,
        userImage: user.photoURL
          ? user.photoURL
          : "/assets/images/placeholder.jpg",
      }}
    >
      <StyledInfoUpload>
        <StyledInfoUploadAvatar src={userImage} />

        <StyledInfoUploadContent>
          <StyledInfoUploadBtnView>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <label htmlFor="icon-button-file">
                <Button type="primary">Upload</Button>
              </label>
            </div>
            <Button onClick={onReset}>Reset</Button>
          </StyledInfoUploadBtnView>
          <p>
          <IntlMessages id="common.uploadImage" />
          </p>
        </StyledInfoUploadContent>
      </StyledInfoUpload>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name="displayName"
            rules={[
              { required: true, message: formatMessage({ id: "common.enterFullName" }) },
            ]}
          >
            <Input placeholder={formatMessage({ id: "common.fullName" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: formatMessage({ id: "common.enterUserName" }) },
            ]}
          >
            <Input placeholder={formatMessage({ id: "common.username" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: formatMessage({ id: "common.enterCompany" }) }
            ]}
          >
            <Input type="text" placeholder={formatMessage({ id: "common.email" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="company"
            rules={[{ required: true, message: formatMessage({ id: "common.enterCompany" }) }]}
          >
            <Input type="text" placeholder={formatMessage({ id: "common.company" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className="user-profile-group-btn"
          >
            <Button type="primary" htmlType="submit">
              <IntlMessages id="common.saveChanges" />
            </Button>
            <Button>
              <IntlMessages id="common.cancel" />
            </Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default PersonalInfo;
