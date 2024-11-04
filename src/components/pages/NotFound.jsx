import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {' '}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="mb-5">The page you are looking for was not found.</p>
        <Link
          className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
          to="/"
          role="button"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
