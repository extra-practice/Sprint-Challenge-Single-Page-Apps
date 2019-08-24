import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList.js";
import { Route } from "react-router-dom";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
