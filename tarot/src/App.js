import { useState } from "react";
import CardTarot from "./Components/Card/CardTarot";
import cards from './Data/cards.json'
import { AppContainer, CardContainer, Header } from "./styled";

const  App = () => {

  const [cardName, setCardName] =useState()
  const [inicio, setInicio] = useState(false)
  const [description, setDescription] = useState()
  const cardsList = cards.cards
  const baseUrlCard = cards.imagesUrl
  const backImageCard = cards.imageBackCard
  console.log("base",baseUrlCard)
  console.log("inicio",inicio)
  console.log("lista",cardsList)

  const shuffle = (deck) => {
    console.log("inShuffle",deck)
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck
  }

  const onClickCard = (card, description) => {
    console.log("descrição", description)
    console.log("nome", card)
    setCardName(card)
    setDescription(description)
  }

  const onClickIniciar = () => {
    setInicio(true)
    setCardName('')
    setDescription('')
    console.log("shufle",shuffle(cardsList))
  }

  const allCards = cardsList.map((card) =>{
    return (<CardTarot key = {card.name}
      backImage={backImageCard}
      image={`${baseUrlCard}${card.image}`}
      name={card.name}
      onClickCard={()=>onClickCard(card.name, card.description)}
      clicked={cardName}
      inicio={inicio}
      description={card.description}
  />)
  })
  return (
    <AppContainer>
      <Header>
      <button onClick={onClickIniciar}>Iniciar</button>
      {cardName}
      {description}
      </Header>
      <CardContainer >
        {allCards}
      </CardContainer>
    </AppContainer>
  );
}

export default App;
