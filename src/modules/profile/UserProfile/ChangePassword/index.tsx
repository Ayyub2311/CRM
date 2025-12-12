import { Button, Col, Form, Input } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from "../index.styled";
import { useIntl } from "react-intl";

const ChangePassword = () => {
  const { formatMessage } = useIntl();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledUserProfileForm
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.changePassword" />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name="oldPassword"
            rules={[
              { required: true, message: formatMessage({ id: "common.enterPassword" }) },
            ]}
          >
            <Input.Password placeholder={formatMessage({ id: "common.enterPass" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} />
        <Col xs={24} md={12}>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: formatMessage({ id: "common.enterNewPassword" }) },
            ]}
          >
            <Input.Password placeholder={formatMessage({ id: "common.enterNewPass" })} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: formatMessage({ id: "common.enterConfirmPassword" }),
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  console.log(rule);
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    formatMessage({ id: "common.passwordMismatch" })
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={formatMessage({ id: "common.enterConfirmNewPass" })} />
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
    </StyledUserProfileForm>
  );
};

export default ChangePassword;
