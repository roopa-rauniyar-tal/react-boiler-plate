import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDemo, ReactHookForm } from "./components";
import { MobileVerification } from "./components/Forms";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list">React Query Demo</Link>
              </li>
              <li>
                <Link to="/form">React Hook Form</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/list" element={<ReactQueryDemo />}/>
            <Route path='/form' element={<MobileVerification />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
