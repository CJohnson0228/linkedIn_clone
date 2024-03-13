import styled from '@emotion/styled'

interface HeaderProps {}

const Container = styled.div({
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #0000000F',
  left: 0,
  top: 0,
  padding: '0 26px',
  position: 'fixed',
  width: '100vw',
  zIndex: 100,
})
const Content = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  minHeight: '100%',
  maxWidth: 1128,
})

const Logo = styled.span({
  marginRight: '8px',
  fontSize: '0px',
})

const Search = styled.div({
  opacity: 1,
  flexGrow: 1,
  position: 'relative',
  '& > div': {
    maxWidth: '280px',
    input: {
      border: 'none',
      boxShadow: 'none',
      backgroundColor: '#EEF3F8',
      borderRadius: 2,
      color: '#000000EE',
      width: '218px',
      padding: '0 8px 0 40px',
      lineHeight: 1.75,
      fontWeight: 400,
      fontSize: '14px',
      height: '34px',
      borderColor: '#DCE6F1',
      verticalAlign: 'text-top',
    },
  },
})
const SearchIcon = styled.div({
  width: '40px',
  position: 'absolute',
  zIndex: 1,
  top: '10px',
  left: '2px',
  borderRadius: '0 2px 2px 0',
  margin: 0,
  pointerEvents: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'backgroundColor 0.15s',
})

const Nav = styled.nav({
  marginLeft: 'auto',
  display: 'block',
  '@media(max-width: 768px)': {
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
})

const NavListWrap = styled.ul({
  display: 'flex',
  flexWrap: 'nowrap',
  listStyle: 'none',
  '& .active': {
    'span:after': {
      content: '""',
      transform: 'scaleX(1)',
      borderBottom: '2px solid #FFFFFF',
      bottom: 0,
      left: 0,
      position: 'absolute',
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      borderColor: '#000000EE',
    },
  },
})

const NavList = styled.li({
  display: 'flex',
  alignItems: 'center',
  a: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    fontWeight: 400,
    justifyContent: 'center',
    lineHeight: 1.5,
    minHeight: '52px',
    minWidth: '80px',
    position: 'relative',
    textDecoration: 'none',
    span: {
      color: '#00000099',
      display: 'flex',
      alignItems: 'center',
    },
    '@media (max-width: 768px)': {
      minWidth: '78px',
    },
  },
  '&:hover, &:active': {
    a: {
      span: {
        color: '#000000EE',
      },
    },
  },
})

const Signout = styled.div({
  position: 'absolute',
  top: '48px',
  backgroundColor: '#FFFFFF',
  borderRadius: '0 0 8px 8px ',
  width: '100px',
  height: '40px',
  fontSize: '16px',
  transition: 'all 0.2s',
  textAlign: 'center',
  display: 'none',
})

const User = styled(NavList)({
  'a > svg': {
    width: '24px',
    borderRadius: '50%',
  },
  'a > img': {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
  },
  span: {
    alignItems: 'center',
  },
  '&:hover': {
    '& > .signout': {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
  },
})

const Work = styled(User)({
  borderLeft: '1px solid #0000000F',
})

const Header = (props: HeaderProps) => {
  const {} = props
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img
              src='/images/home-logo.svg'
              alt='LinkedIn'
            />
          </a>
        </Logo>
        <Search>
          <div>
            <input
              type='text'
              placeholder='Search'
            />
          </div>
          <SearchIcon>
            <img
              src='images/search-icon.svg'
              alt=''
            />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a>
                <img src='/images/nav-home.svg' />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-network.svg' />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-jobs.svg' />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-messaging.svg' />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-notifications.svg' />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img
                  src='/images/user.svg'
                  alt=''
                />
                <span>
                  Me
                  <img
                    src='/images/down-icon.svg'
                    alt=''
                  />
                </span>
              </a>
              <Signout className='signout'>
                <a>Sign Out</a>
              </Signout>
            </User>
            <Work>
              <a>
                <img
                  src='/images/nav-work.svg'
                  alt=''
                />
                <span>
                  Work
                  <img
                    src='images/down-icon.svg'
                    alt=''
                  />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header
