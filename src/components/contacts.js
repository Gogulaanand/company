import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd'
import emailjs from 'emailjs-com'
import './contacts.scss'
import conversation from './assets/contact.svg'


function Contact(props){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [comments, setComments] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: email.split('@')[0],
      to_name: 'Company',
      message_html: `<table>
                      <tr><th>Subject</th><td>${name} contacting from Company website</td></tr>
                      <tr><th>Message</th><td>${comments}</td></tr>
                      <tr><th>Phone</th><td>${phone}</td></tr>
                      <tr><th>Email</th><td>${email}</td></tr>`

    }
    resetForm()
    emailjs.send(
      'gmail', 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
  }

  function resetForm(){
    setName('')
    setEmail('')
    setPhone(0)
    setComments('')
  }

  return(
    <div id='contact'>
      <div id='contact-leftPane'>
        <h2 id='contact-title'>Contact Us</h2>
        <h5>Phone : +123 456 789</h5>
      </div>
      <Divider type="vertical" id="contact-divider" style={dividerStyle}/>
      <div id='contact-rightPane'>
        <Form {...layout} name='nest-messages' onSubmit={handleSubmit}>
          <Form.Item label='Name' name={['user', 'name']}>
            <Input placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
          </Form.Item>
          <Form.Item label='Email' name={['user', 'email']}>
            <Input placeholder='Email ID' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
          </Form.Item>
          <Form.Item label='Phone' name={['user', 'number']}>
            <Input placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)}/>
          </Form.Item>
          <Form.Item label='Comments' name={['user', 'comments']}>
            <Input.TextArea placeholder='Tell us what you are looking for !' value={comments} onChange={e => setComments(e.target.value)} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:4 }}>
            <Button type='primary' htmlType='submit' onClick={handleSubmit}>
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