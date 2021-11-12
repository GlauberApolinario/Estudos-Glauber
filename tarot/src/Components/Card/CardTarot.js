import { CardActionArea, CardMedia } from '@material-ui/core';
import React from 'react';
import { CardContainer} from './styled';



const CardTarot = (props) => {
  console.log(props.description)
    
    return (
        <CardContainer>
            <CardActionArea>
                <CardMedia
                    onClick={()=>props.onClickCard()}
                    backImage={props.backImage}
                    component={'img'}
                    alt ={props.name}
                    image={props.inicio?(props.clicked===props.name?props.image:props.backImage):props.image}
                    description={props.description}
                >
                    
                </CardMedia>
            </CardActionArea>
            </CardContainer>
    );
}

export default CardTarot;