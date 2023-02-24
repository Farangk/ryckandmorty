import SearchBar from "./SearchBar";
import { NavSearch, DivStyle, SpanStyle} from "./styles/StylesNav.js";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <NavSearch>
      <DivStyle>
        <Link to={"/home"} style={{textDecoration: 'none'}}>
          <SpanStyle>Home</SpanStyle>
        </Link>
      </DivStyle>

      <DivStyle>
        <Link to={"/about"} style={{textDecoration: 'none'}}>
          <SpanStyle>About</SpanStyle>
        </Link>
      </DivStyle>

      <DivStyle>
        <Link to={"/favorites"} style={{textDecoration: 'none'}}>
          <SpanStyle>Favorites</SpanStyle>
        </Link>
      </DivStyle>

      <SearchBar onSearch={props.onSearch} />
    </NavSearch>
  );
}
