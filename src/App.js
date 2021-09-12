import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      
      <Navbar />
      <Banner />

      <Row title="netflix originals" fetchUrl={requests.fetchNetflixOriginals} isFirstRow={true}/>
      <Row title="trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="documentaries" fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
