import './App.css';
import {useState} from 'react';

function App() {
  // set up an initial counter for the slice
  // let counter = 1
  // set up state
  const [counter, setCounter] = useState(1)
  // list of three messages
  const messages = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]
  
  // set state for open and close button
  const [isopen, setIsopen] = useState(false)

  // function to open a 'read more' paragraph
  const readmore = function(){
    setIsopen(!isopen)
  }
  return (
    <>
        <h1 className='title'>Slice App by Henry Perez</h1>
        <section className='slicewrapper'>
          <div className='numberWrapper'>
            <div><p className={counter==1? "active":""}>1</p></div>
            <div><p className={counter==2? "active":""}>2</p></div>
            <div><p className={counter==3? "active":""}>3</p></div>
          </div>
          <p className='msg'><em>{messages[counter-1]}</em></p>
          <div className='btngroup'>
            <button onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
            <button onClick={function(){if(counter<messages.length)setCounter(counter+1)}}>Next</button>
          </div>
        </section>

        <h1 className='title'>Open and Close button</h1>
        <div className='info'>
          <p><b>Cat (Felis catus)</b>,commonly referred to as the domestic cat or house cat</p>
          <button className='readmore_btn' onClick={readmore}>{isopen? "Hide":"Read More"}</button>
        </div>

        <section className='hiddentext'>
          {(isopen) &&
          <p>Cat (Felis catus),also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occured in the near east around 7500 BC.</p>}
        </section>
    </>
  );
}

export default App;
