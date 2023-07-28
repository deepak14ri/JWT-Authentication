import { Container, Card } from 'react-bootstrap';
// import UserDetails from '/src/components/UserDetails.jsx';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-3 d-flex flex-column align-items-center hero-card sm-light w-10'>
          <h1 className='text-center mb-0'>Users Details</h1>
          {/* <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          < UserDetails />
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div> */}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
