import './App.css';
import User from './comments';
import './index.css'
// import images
import manbusinessicon from './images/business_man_icon.png';
import avocadoicon from './images/avocado_icon.png';
import defaulticon from './images/default_icon.png';

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User image={manbusinessicon} username="Mr. Joe" date="04/01/2025" usercomment="Great job!"/>
        <User image={avocadoicon} username="Ms. Avocado" date="03/30/2025" usercomment="Avocado."/>
        <User image={defaulticon} username="Anonymous Guest" date="04/07/2025" usercomment="I need more rest."/>
      </main>
    </>
  );
}

export default App;
