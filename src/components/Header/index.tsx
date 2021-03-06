import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";
import useTheme from "../../contexts/ThemeProvider/useTheme";
import useMenu from "../../contexts/MenuProvider/useMenu";
import { sliceString } from "../../utils/formatter";

import userDark from "../../assets/icon_dark_user.png";
import userLight from "../../assets/icon_light_user.png";
import themeDark from "../../assets/icon_dark_theme.png";
import themeLight from "../../assets/icon_light_theme.png";
import * as C from "./styles";

export default function Header() {
  const { cartAmout } = useSelector(selectCart);
  const { theme, handleChangeTheme } = useTheme();
  const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useMenu();

  return (
    <C.Section>
      <C.Container>
        <C.MenuWrapper>
          <C.Menu onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu} />
          <C.Span>{isMenuOpen ? "CLOSE" : "SHOP"}</C.Span>
        </C.MenuWrapper>

        <C.LogoWrapper>
          <Link to="/">
            <C.Span>Vanilla</C.Span>
          </Link>
        </C.LogoWrapper>

        <C.Wrapper>
          <C.Button onClick={handleChangeTheme}>
            <C.Icon
              src={theme.name === "light" ? themeDark : themeLight}
              alt="Theme icon."
            />
          </C.Button>

          <C.Button>
            <Link to="/user">
              <C.Icon
                src={theme.name === "light" ? userDark : userLight}
                alt="User icon."
              />
            </Link>
          </C.Button>

          <Link to="/cart">
            <C.Span>CART {sliceString(cartAmout)}</C.Span>
          </Link>
        </C.Wrapper>
      </C.Container>
    </C.Section>
  );
}
