import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import CardPage from "./components/CardPage/CardPage";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EditPage from './pages/EditPage/EditPage'


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
        path="/itinerary"
        element={
          <IsPrivate>
            <ItineraryPage/>
          </IsPrivate>
        }
        />
        <Route
        path="/create"
        element={
          <IsPrivate>
            <CreatePage/>
          </IsPrivate>
        }
        />
        <Route
        path="/cardpage"
        element={
          <IsPrivate>
            <CardPage/>
          </IsPrivate>
        }
        />
        <Route
        path="/detailspage/:id"
        element={
          <IsPrivate>
            <DetailsPage/>
          </IsPrivate>
        }
        />
        <Route
        path="/edit/:id"
        element={
          <IsPrivate>
            <EditPage/>
          </IsPrivate>
        }
        />

      </Routes>
    </div>
  );
}

export default App;
