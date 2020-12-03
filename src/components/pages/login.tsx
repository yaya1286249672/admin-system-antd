/*
 * @Author: wangya 
 * @Date: 2020-12-01 10:59:01 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-12-02 10:53:35
 */
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { RouteComponentProps } from 'react-router';
import { FormProps } from 'antd/lib/form';
import './login.scss';

const FormItem = Form.Item;
interface LoginProps {

}
const Login = (props: LoginProps & RouteComponentProps) => {
  const { history } = props;
  const handleSubmit = (values: any) => {
    history.push('/app');
  };
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-logo">
          <span>React Admin</span>
        </div>
        <Form
          onFinish={handleSubmit}
          style={{ maxWidth: '300px' }}>
          <FormItem
            name="userName"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              placeholder="管理员输入admin, 游客输入guest"
            />
          </FormItem>
          <FormItem name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input
              // prefix={<LockOutlined size={13} />}
              type="password"
              placeholder="管理员输入admin, 游客输入guest"
            />
          </FormItem>
          <FormItem>
            <span className="login-form-forgot" style={{ float: 'right' }}>
              忘记密码
                    </span>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
            >
              登录
                    </Button>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>或 现在就去注册!</span>
            </p>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default Login;