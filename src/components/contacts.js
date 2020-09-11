import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Divider, notification } from 'antd'
import emailjs from 'emailjs-com'
import './contacts.scss'
import conversation from './assets/contact.svg'

function Contact(props){

  const [form, setForm] = useState({ name: "", email: "", phone: "", comments: "" })
  const [submitLoading, setLoading] = useState(false)
  const [formRef, setFormRef] = useState(null)

  useEffect(() => {}, [submitLoading, form])

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const dividerStyle = {
    border: '1px solid #dddddd',
    height: '300px'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const onFinish = (values) => {
    // do nothing if a form is being submitted currently
    if(submitLoading) return;
    setLoading(true)

    let templateParams = {
      from_name: form.name,
      to_name: 'Company',
      message_html: `<table>
                      <tr><th>Subject</th><td>${form.name} contacting from Company website</td></tr>
                      <tr><th>Phone</th><td>${form.phone}</td></tr>
                      <tr><th>Email</th><td>${form.email}</td></tr>
                      <tr><th>Message</th><td>${form.comments}</td></tr>`

    }
    setForm({ name: "", email: "", phone: "", comments: ""})
    emailjs.send(
      'gmail', 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((resp) => {
      if(resp.status===200){
        notification.open({
          message: 'Message sent successfully!',
          description: 'We will get you back to you shortly',
          icon: '🚀'
        })
        //reset form status
        formRef.resetFields()
        setLoading(false)
      }
    }).catch(e => {
      console.log(e)
      notification.open({
        message: 'Something went wrong, pls try after sometime!',
        icon: '👻'
      })
    })
  }

  return(
    <div id='contact'>
      <div id='contact-leftPane'>
        <h2 id='contact-title'>Contact Us</h2>
        <h5>Phone : +123 456 789</h5>
      </div>
      <Divider type="vertical" id="contact-divider" style={dividerStyle}/>
      <div id='contact-rightPane'>
        <Form {...layout} name='nest-messages' onFinish={onFinish} id='contact-form' ref={f => setFormRef(f)}>
          <Form.Item label='Name' name={['user', 'name']}>
            <Input placeholder='Name' name='name' value={form.name} onChange={e => handleChange(e)}/>
          </Form.Item>
          <Form.Item label='Email' name={['user', 'email']}>
            <Input placeholder='Email ID' name='email' type='email' value={form.email} onChange={e => handleChange(e)}/>
          </Form.Item>
          <Form.Item label='Phone' name={['user', 'number']}>
            <Input placeholder='Phone' name='phone' value={form.phone} onChange={e => handleChange(e)}/>
          </Form.Item>
          <Form.Item label='Comments' name={['user', 'comments']}>
            <Input.TextArea placeholder='Tell us what you are looking for !' name='comments' value={form.comments} onChange={e => handleChange(e)} />
          </Form.Item>
          <p role='status'></p>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:4 }}>
            <Button type='primary' htmlType='submit' loading={submitLoading} id='form-submitButton'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <img src={conversation} alt='send us an email illustration' id='contact-img'/>
    </div>
  )
}

export default Contact