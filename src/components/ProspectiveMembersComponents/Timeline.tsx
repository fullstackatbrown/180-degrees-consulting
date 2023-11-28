import './styles/Banner.css'
import timeline from "./timeline.png";

function Timeline(){
    return <div>
        <h2 id = "timelineBody" style = {{fontSize: 40,  fontFamily: 'Mulish', letterSpacing: 2}}>
            Timeline
        </h2>
        <img id="timeline" src={timeline}/>
    </div>
}
  
  export default Timeline;