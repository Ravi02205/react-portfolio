import './index.scss';

const AnimatedLetters = ({ letterclass, strArray, index }) => {
    return (
        <span>
            {
                strArray.map((char, i) => 
                    <span key={char + i} className={`${letterclass} _${i + index}`} >
                        {char}
                    </span>
                )
            }
        </span>
    );
}

export default AnimatedLetters;