import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main>
      <h1>Not Found</h1>
      <Link to="/">Home</Link>
    </main>
  );
}

export default NotFound;
