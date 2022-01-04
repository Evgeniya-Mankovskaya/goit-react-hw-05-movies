import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const MoviesView = lazy(() => import("./views/MoviesView/MoviesView"));
const MovieDetailsView = lazy(() =>
  import("./views/MovieDetailsView/MovieDetailsView")
);
const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
