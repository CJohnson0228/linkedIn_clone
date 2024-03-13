import styled from '@emotion/styled'

interface HomeProps {}

const Container = styled.div({
  paddingTop: '52px',
  maxWidth: '100%',
})

const Section = styled.div({
  minHeight: '50px',
  padding: '16px',
  boxSizing: 'content-box',
  textAlign: 'center',
  textDecoration: 'underline',
  display: 'flex',
  justifyContent: 'center',
  h5: {
    color: '#0a66c2',
    padding: '0 5px',
    fontSize: 14,
    a: {
      fontWeight: 700,
    },
  },
  p: {
    fontSize: 14,
    color: '#434649',
    padding: '0 5px',
    fontWeight: 600,
  },
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '0 5px',
  },
})

const Content = styled.div({
  maxWidth: 1128,
  marginLeft: 'auto',
  marginRight: 'auto',
})

const Layout = styled.div({
  display: 'grid',
  gridTemplateAreas: 'leftside main rightside',
  gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr)',
  columnGap: 25,
  rowGap: 25,
  margin: '25px 0',
  '@media(max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 5px',
  },
})

const Home = (props: HomeProps) => {
  const {} = props
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <a>Hiring in a hurry?</a>
          </h5>
          <p>Find Talented Pros in record time with Upwork and keep business working.</p>
        </Section>
        <Layout>
          <div>Left Side</div>
          <div>Main</div>
          <div>Right Side</div>
        </Layout>
      </Content>
    </Container>
  )
}

export default Home
