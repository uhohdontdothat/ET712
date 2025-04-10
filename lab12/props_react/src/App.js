// Import files
import './App.css';
import './index.css';
import User from './comments';
import User_feedback from "./user_feedback";
import Modalwindow from './modalwindow';

// import images
import manbusinessicon from './images/business_man_icon.png';
import avocadoicon from './images/avocado_icon.png';
import defaulticon from './images/default_icon.png';

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User_feedback><User image={manbusinessicon} username="Mr. Smith" date="04/01/2025" usercomment="Great job!"/></User_feedback>
        <User_feedback><User image={avocadoicon} username="Ms. Avocado" date="03/30/2025" usercomment="Avocado."/></User_feedback>
        <User_feedback><User image={defaulticon} username="Anonymous Guest" date="04/07/2025" usercomment="I need more rest."/></User_feedback>
      </main>
      {/* Post Comments */}
      <div className="postcomment">
        <ul className="commentlist"></ul>
      </div>

    </>
  );
}

export default App;
