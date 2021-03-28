import styled from 'styled-components';

type BurgerProps = {
  bgcolor: string;
  menuOpen: boolean;
  count?: number;
};

type SidebarProps = {
  menuOpen: boolean;
  mixins?: any;
  theme?: any;
  tabIndex?: number;
  ariaHidden?: boolean;
};

type ThemeProps = {
  color: string;
};

export const StyledMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledBurger = styled.div<BurgerProps>`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }: any) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props: any) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props: any) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props: any) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: green;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      /* width: ${(props: any) => (props.menuOpen ? `100%` : `120%`)}; */
      top: ${(props: any) => (props.menuOpen ? `0` : `-8px`)};
      opacity: ${(props: any) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }: any) =>
        menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      /* width: ${(props: any) => (props.menuOpen ? `100%` : `80%`)}; */
      bottom: ${(props: any) => (props.menuOpen ? `0` : `-8px`)};
      transform: rotate(${(props: any) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }: any) =>
        menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
    }
  }
`;

export const StyledSidebar = styled.aside<SidebarProps>`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }: any) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(40vw, 200px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${({ menuOpen }: any) => (menuOpen ? 0 : 100)}vw);
    visibility: ${({ menuOpen }: any) => (menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    ${({ theme }: any) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: right;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 20px;
      /* counter-increment: item 1; */
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
      &:before {
        /* content: '0' counter(item) '.'; */
        /* display: block; */
        /* margin-bottom: 5px; */
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
    a {
      ${({ theme }: any) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
  .resume-link {
    ${({ theme }: any) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;
