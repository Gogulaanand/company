import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd'
import emailjs from 'emailjs-com'
import './contacts.scss'
import conversation from './assets/contact.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  const toastStyle = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
    emailjs.send(
      'gmail', 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((resp) => {
      console.log(resp)
      if(resp.status===200){
        toast.success('🚀Message sent successfully!!', toastStyle)
      }
    }).catch(e => {
      console.log(e)
      toast.error("👻Something went wrong, pls try after sometime!", toastStyle);
    })

    setEmail('')
    setName('')
    setPhone(null)
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
        <Form {...layout} name='nest-messages' onSubmit={handleSubmit} id='contact-form'>
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
            <ToastContainer/>
          </Form.Item>
        </Form>
      </div>
      <img src={conversation} alt='send us an email illustration' id='contact-img'/>
    </div>
  )
}

export default Contact