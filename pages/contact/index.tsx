// import React, { useState } from 'react';

import Layout from '../../components/Layout';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default function Contact() {
  const [form] = Form.useForm();

  return (
    <Layout home={false}>
      <>
        <div className='contact-form'>
          <Form form={form} {...layout}>
            <Form.Item label='Name'>
              <Input placeholder='First and Last Name' />
            </Form.Item>
            <Form.Item label='Email'>
              <Input placeholder='email address' />
            </Form.Item>
            <Form.Item>
              <Button type='primary'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </>
    </Layout>
  );
}
