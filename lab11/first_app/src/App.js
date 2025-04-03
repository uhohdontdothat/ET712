import './App.css';
import dogimg from './images/dog.avif';

function App() {
  // Variable
  const msg = "Welcome to ReactJS"
  // Function
  function printsomething(){
    return "Hello from function"
  }
  return (
    <div>
      <h1 style={{color:"skyBlue", textAlign:"center"}}>Henry Perez</h1>
      <p>This is my first ReactJS app.</p>
      <p>List of fruits</p>
      <ol>
        <li>Grapes</li>
        <li>Apples</li>
        <li>Oranges</li>
      </ol>
      <h2>Inline styling</h2>
      <label for="email">Enter E-mail: </label>
      <input type="text" id="email" placeholder="Enter an E-mail address..." style={{padding:"10px", backgroundColor:"lightgreen"}}/>
      <button type="submit" style={{backgroundColor:"crimson", padding:"10px 20px"}}>Submit</button>
      <hr/>
      <img src={dogimg} style={{width:"500px", display:"block", margin:"auto", border:"groove 10px red"}}/> 
      <h2 className='subtitle'>Variables in JSX</h2>
      <p>Calling variable msg = {msg}</p>
      <p>Calling function printsomething = {printsomething()}
        
      </p>

    </div>
  );
}

export default App;
