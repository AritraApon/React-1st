import { useState } from "react";

export default function BatsMen() {

    const playerStyle = {
        border: '2px solid yellow',
        padding: '20px',
        margin: '20px',
    }


    const [runs, setRuns] = useState(0);
    const [singles , setSingles] = useState(0);
    const [dabbles , setDabbles] = useState(0);
    const [fours , setFour] = useState(0);
    const [Sixes , setSixes] = useState(0);


    const single = () => {
        const updatesRuns = runs + 1;
        const single = singles + 1 ;
        setSingles(single)
        setRuns(updatesRuns)
    };

    const dabble = () => {
        const updatesRuns = runs + 2;
        const updatesDabbles = dabbles + 1;
        setDabbles(updatesDabbles)
        setRuns(updatesRuns)
    };

    const four = () => {
        const updatesRuns = runs + 4;
        const updatesFours = fours + 1;
        setFour(updatesFours)
        setRuns(updatesRuns)
    }
    const six = () => {
        const updatesRuns = runs + 6;
        const updatesSixes = Sixes + 1;
        setSixes(updatesSixes)
        setRuns(updatesRuns)
    }


    return (
        <div style={playerStyle}>
            <h1>Score:{runs}</h1>
            <p>Single:- {singles}--
                 Dabble:- {dabbles}
                 --Four:-{fours}
                 --Six :-
                {Sixes}--
            </p>
            {
                runs > 50 && <p>Congratulation Fifty</p>

            }
            {
                 runs > 100 && <p>Century</p>
            }
            <button onClick={single}>Single</button>
            <button onClick={dabble}>Dabble</button>
            <button onClick={four}>Four</button>
            <button onClick={six}>Six</button>
        </div>
    )
}