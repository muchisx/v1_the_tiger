import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/contact">Contact</Link>
      <Button text="Button text" role="button" variant="primary" />
    </div>
  );
}

export default Home;
