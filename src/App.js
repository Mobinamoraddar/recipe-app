import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Deliciousss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
