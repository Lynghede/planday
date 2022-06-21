import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { NewBox, Switcher, NoPaddingMobileNewBox } from "../ui/EveryLayout";
import Profileperson from "../public/svg/profileperson.svg";
import { Paragraph } from "./Paragraph";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <NewBox padding="0">
        <Logo />
      </NewBox>

      <NewBox padding="0" style={{ marginTop: "2px" }}>
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
        <div>
          <Paragraph color="var(--color-light-green)">
            © 2022, Morten Lynghede, København, Danmark
            <br />
            Planday Assignment
          </Paragraph>
        </div>
      </NewBox>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled(NoPaddingMobileNewBox)`
  display: flex;
  justify-content: space-between;
  margin-top: var(--s1);

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: thin;
  color: var(--color-light-green);
  border: 1px solid var(--color-light-green);
  border-radius: 1rem;
  padding: 0.2rem 1rem;

  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
    color: var(--color-light-purple);
    background: var(--color-light-green);
  }
`;
