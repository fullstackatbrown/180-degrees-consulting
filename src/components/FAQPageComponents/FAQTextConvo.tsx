import FAQtextMessages from "./FAQtextmessages.png"
import './styles/button.css'

export default function FAQTextConvo() {
    return(<div>           
        <img src={FAQtextMessages} alt="Question: What is 180 Degrees Consulting? 
        Answer: 180 Degrees Consulting is the largest consultancy for non-profits and social enterprises
    Question: How can I join 180 Degrees Consulting?
    Answer: You can join 180 Degrees Consulting in the Fall Semester by clicking on Apply Now in the Website Menu tab" />
    <br></br>
    <br></br>
    <button id="askUsAQuestion">
       Ask Us a Question
    </button></div>);
}


