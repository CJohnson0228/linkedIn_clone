import styled from '@emotion/styled'

interface LoginProps {}

const Container = styled.div({
  padding: '5px 10px',
})

const Nav = styled.nav({
  maxWidth: 1128,
  margin: 'auto',
  padding: '12px 0 16px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
})

const Link = styled.a({
  width: 135,
  height: 34,
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    padding: '0 5px',
  },
})

const Join = styled.a({
  fontSize: 16,
  padding: '10px 12px',
  textDecoration: 'none',
  borderRadius: 4,
  color: '#00000099',
  transitionDuration: '0.2s',
  marginRight: 12,
  '&:hover': {
    backgroundColor: '#00000022',
    color: '#000000EE',
    textDecoration: 'none',
    cursor: 'pointer',
  },
})

const SignIn = styled.a({
  boxShadow: 'inset 0 0 0 1px #0A66C2',
  color: '#0A66C2',
  borderRadius: 24,
  transitionDuration: '0.2s',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '40px',
  padding: '10px 24px',
  textAlign: 'center',
  backgroundColor: '#00000000',
  '&:hover': {
    backgroundColor: '#70B5F944',
    color: '#0A66C2',
    textDecoration: 'none',
    cursor: 'pointer',
  },
})

const Section = styled.section({
  display: 'flex',
  alignContent: 'start',
  minHeight: 700,
  paddingBottom: 138,
  paddingTop: 40,
  padding: '60px 0',
  position: 'relative',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 1128,
  alignItems: 'center',
  margin: 'auto',
  '@media (max-width: 768px)': {
    margin: 'auto',
    minHeight: 0,
  },
})

const Hero = styled.div({
  width: '100%',
  h1: {
    paddingBottom: 0,
    width: '55%',
    fontSize: '56px',
    color: '#2977C9',
    fontWeight: 200,
    lineHeight: '70px',
    '@media(max-width: 768px)': {
      textAlign: 'center',
      fontSize: '20px',
      width: '100%',
      lineHeight: 2,
    },
  },
  img: {
    width: '700px',
    height: '678px',
    position: 'absolute',
    bottom: '-2px',
    right: '-150px',
    '@media(max-width: 768px)': {
      top: '230px',
      width: 'initial',
      position: 'initial',
      height: 'initial',
    },
  },
})

const Form = styled.div({
  marginTop: '100px',
  width: '408px',
  '@media(max-width:768px)': {
    marginTop: '20px',
  },
})

const Google = styled.button({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  height: '56px',
  width: '100%',
  borderRadius: 28,
  boxShadow: 'inset 0 0 0 1px #00000099, inset 0 0 0 2px #00000022, inset 0 0 0 1px #00000022',
  verticalAlign: 'middle',
  zIndex: 0,
  transitionDuration: '0.2s',
  fontSize: '20px',
  color: '#00000099',
  '&:hover': {
    backgroundColor: '#CFCFCF40',
    color: '#000000EE',
    boxShadow:
      'inset 0 0 1px 2px #00000099, inset 0 0 1px 2px #00000022, inset 0 0 1px 1px #00000022',
    cursor: 'pointer',
  },
})

const Login = (props: LoginProps) => {
  const {} = props
  return (
    <Container>
      <Nav>
        <Link href='/'>
          <img
            src='/images/login-logo.svg'
            alt='LinkedIn Logo'
          />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your Professional Community</h1>
          <img
            src='/images/login-hero.svg'
            alt='LinkedIn Hero'
          />
        </Hero>
        <Form>
          <Google>
            <img
              src='/images/google.svg'
              alt=''
            />{' '}
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

export default Login
