import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button1 = styled.button`
 visibility: hidden;
`

const Header = () => {
    return (
        <HeaderContainer>
            <button>Pokedex</button>
            <h1>Lista de Pokemon</h1>
            <Button1>Detalhes</Button1>
        </HeaderContainer>
      );
}
 
export default Header;