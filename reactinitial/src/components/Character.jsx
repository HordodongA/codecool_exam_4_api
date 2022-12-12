import { useState } from "react"


const Character = (character) => {
    console.log(character)
    console.log(character.character.name)
    console.log(character.character.details)

    const [showMore, setShowMore] = useState("false")
    const [buttonText, setButtonText] = useState("Show more")

    function showButtonHandler() {
        setShowMore(!showMore)
        setButtonText(showMore ? "Show less" : "Show more")
      }

    return (
        <div className="character-div">
            <p className="character-p">{character.character.name}</p>
            <button onClick={showButtonHandler} >{buttonText}</button>
            {!showMore &&
                <div>
                    <p className="character-details-p">{character.character.details}</p>
                </div>}
        </div>
    )
}

export default Character