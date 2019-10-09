import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form, Icon, Input, Button } from 'antd';

const UsernameForm = ({ form, onChooseUsername }) => {
  const {
    isFieldTouched,
    getFieldError,
    getFieldsError,
    getFieldDecorator,
    getFieldValue,
  } = form;
  const { t } = useTranslation();
  const usernameError = isFieldTouched('username') && getFieldError('username');

  const onSubmitForm = e => {
    e.preventDefault();
    const username = getFieldValue('username');
    onChooseUsername(username);
  };

  const hasErrors = fieldsError =>
    Object.keys(fieldsError).some(field => fieldsError[field]);

  return (
    <Form layout="inline" onSubmit={onSubmitForm}>
      <Form.Item
        validateStatus={usernameError ? 'error' : ''}
        help={usernameError || ''}
      >
        {getFieldDecorator('username', {
          rules: [{ required: true, message: t('home.pleaseChooseUsername') }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder={t('home.username')}
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
        >
          {t('home.play')}
        </Button>
      </Form.Item>
    </Form>
  );
};

UsernameForm.propTypes = {
  form: PropTypes.shape({
    isFieldTouched: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    getFieldsError: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
  }),
  onChooseUsername: PropTypes.func.isRequired,
};

export default Form.create({ name: 'username_form' })(UsernameForm);
