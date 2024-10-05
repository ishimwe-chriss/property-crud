import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Property Management App</h1>
      <nav>
        <ul>
          <li>
            <Link href="pages/properties">View Properties</Link>
          </li>
          <li>
            <Link href="pages/properties/create">Create New Property</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
