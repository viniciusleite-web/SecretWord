import './Game.css';
import {useState,useRef} from 'react';
const Game = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score}) => {
const handleSubmit = (event) =>{
   event.preventDefault();
  
  verifyLetter(letter)
  setLetter("");
  letterInputRef.current.focus()
  }
 
  const [letter,setLetter] = useState("");
  const letterInputRef = useRef(null)
  return (
  <div className="game">
    <p className="points">
      <span>Pontuação : {score}</span>
    </p>
        <h1>Adivinhe a palavra: </h1>
        <h3 className="tip">
          Dica sobre a palavra <span>{pickedCategory}</span>
          <p>Você aina tem {guesses} tentativas(s).</p>
        </h3>
        <div className='wordContainer'>
           {letters.map((letter, i) => (
              guessedLetters.includes(letter) ? (
                <span key={i} className="letter">{letter}</span>
              ) : (
                <span key={i} className="blankSquare"></span>
              )
          ))}  
         
        </div>
        <div className="letterContainer">
          <p>Tente adivinha a letra da palavra: </p>
          <form onSubmit={handleSubmit}>
            <input type="text" name='latter' maxLength="1" required onChange={(e) => setLetter(e.target.value) } value={letter} ref={letterInputRef}/>
            <button>Jogar!</button>
          </form>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas :</p>
           {wrongLetters.map((letter, i) => (
            <span key={i}>{letter} , </span>
           ))}
          </div>
        </div>
  </div>
       
  )
}

export default Game