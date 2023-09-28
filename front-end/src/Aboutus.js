import { useState, useEffect } from 'react'
import axios from 'axios'
import './Messages.css'
import loadingIcon from './loading.gif'
import MessageForm from './MessageForm'
import Message from './Message'

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutus = props => {
    const [about, setAbout] = useState([])
    const [img, setImg] = useState([])
    const [note, setNote] = useState('')

    // const about = "I'm a student in NYU, and I'm a part of the Agile development course this semester. \n This website is a part of the assignment in the Agile development course.\n I love programming and web development. I'm looking forward to working with you!"
    
    const fetchContent = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        setAbout(response.data.aboutData.content);
        setImg(response.data.aboutData.image);
        setNote(response.data.aboutData.note);
      })
  }

  useEffect(() => {
    fetchContent()
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <h1>About us</h1>

      <p>{about}</p>
      <br/>
      <p>{note}</p>
      <img src={img} alt="aboutus" />
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutus
