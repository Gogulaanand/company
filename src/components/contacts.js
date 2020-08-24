import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd'
import './contacts.scss'
import emailjs from 'emailjs-com'

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
      span: 8,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: email,
      to_name: 'Bell',
      subject: `${name} contacting from Company website`,
      message_html: `${comments}
                     Phone: ${phone}`
    }
    setName('')
    setEmail('')
    setPhone(null)
    setComments('')
    emailjs.send(
      'gmail', 
      'template_luOZdH2O',
      templateParams,
      'user_5Vl91CUzguX2jndTfJfYE'
    )
  }

  return(
    <div id='contact'>
      <div id='contact-leftPane'>
        <h2 id='contact-title'>Contact Us</h2>
        <h5>Phone : +123 456 789</h5>
      </div>
      <Divider type='vertical' />
      <div id='contact-rightPane'>
        <Form {...layout} name='nest-messages' onSubmit={handleSubmit}>
          <Form.Item label='Name' name={['user', 'name']}>
            <Input placeholder='Name' onChange={e => setName(e.target.value)}/>
          </Form.Item>
          <Form.Item label='Email' name={['user', 'email']}>
            <Input placeholder='Email ID' onChange={e => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label='Phone' name={['user', 'number']}>
            <Input placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
          </Form.Item>
          <Form.Item label='Comments' name={['user', 'comments']}>
            <Input.TextArea placeholder='Tell us what you are looking for !' onChange={e => setComments(e.target.value)} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:4 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Contact