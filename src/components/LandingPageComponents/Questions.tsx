import './styles/QuestionsStyle.css';
import { useNavigate } from 'react-router-dom'
import forest from './Forest.png'

function Questions(){
  const navigate = useNavigate();
  return <div id="questionsDiv">
    <div id="whiteRect"></div>
    <div id="greenRect"></div>
    <h1> Want to know more about how we can help you? </h1>
    <h2 style={{display: 'inline-block'}}>Contact us about business inquiries</h2>
    <button id="hereButton" onClick={() => navigate("/contact-us")}>
        Here
    </button>
    <h1> Have any questions about the club or what we do? </h1>
    <h2>Please see our Frequently Asked Questions page to find the answer to your question or submit your own!</h2>
    <button id="faqButton" onClick={() => navigate("/faq")}>
       FAQ Page
    </button>
  </div>
}

export default Questions;