import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
// Components
import { NewBox, NoPaddingMobileNewBox } from "../ui/EveryLayout";
import Profileperson from "../public/svg/profileperson.svg";
import Logo from "./Logo";
import { NavItem } from "./Footer";

/** Navigation menu component */
const Header: React.FC = () => {
  return (
    <Wrapper>
      <NewBox padding="0">
        <Logo />
      </NewBox>
      <NewBox padding="0">
        <Link href="/profile">
          <a>
            <NavItem>
              <Image
                alt="profile"
                src={Profileperson}
                layout="fixed"
                height={25}
                width={25}
              />
              Watchlist
            </NavItem>
          </a>
        </Link>
      </NewBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(NoPaddingMobileNewBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 1000;
  margin-bottom: var(--s1);
  padding-top: 0;
`;
