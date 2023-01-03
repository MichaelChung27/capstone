import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import f1Data from "./assets/f1-data.json";
import { DriverItem } from "./components/DriverItem";
import { NavbarItem } from "./components/NavbarItem";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

f1Data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // all states
  const [searchFilter, setSearchFilter] = useState("");
  const [teamFilters, setTeamFilters] = useState([]);
  const [checkedTeamFilter, setCheckedTeamFilter] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [regionFilters, setRegionFilters] = useState([]);
  const [checkedRegionFilter, setCheckedRegionFilter] = useState([false, false, false, false, false, false])
  const [nationFilters, setNationFilters] = useState([]);
  const [checkedNationFilter, setCheckedNationFilter] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [favoriteFilter, setFavoriteFilter] = useState([true, false, false]);
  const [checkedSortFilter, setCheckedSortFilter] = useState([true, false, false, false, false, false, false, false, false, false, false]);
  const [seasonFilter, setSeasonFilter] = useState("All");
  const [checkedSeasonFilter, setCheckedSeasonFilter] = useState([true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
  //used so that add/remove favorites button can trigger changes
  const [numDrivers, setNumDrivers] = useState(0);

  //Team filters
  function addTeamFilter(team, updatedCheckedState) {
    setTeamFilters([...teamFilters, team]);
    setCheckedTeamFilter(updatedCheckedState);
  }

  const removeTeamFilter = (team, updatedCheckedState) => { 
    setTeamFilters(teamFilters.filter(addTeamFilter => addTeamFilter !== team));
    setCheckedTeamFilter(updatedCheckedState);
  }

  //rn it just does or operation. Should possibly do and Operation?
  const filterByTeam = item => {
    if (teamFilters.length === 0) {
      return true;
    }
    return teamFilters.some(t => item.team.includes(t));
  }

  //nation filters
  function addNationalityFilter(nation, updatedCheckedState) {
    setNationFilters([...nationFilters, nation]);
    setCheckedNationFilter(updatedCheckedState);
  }

  const removeNationalityFilter = (nation, updatedCheckedState) => { 
    setNationFilters(nationFilters.filter(addNationalityFilter => addNationalityFilter !== nation));
    setCheckedNationFilter(updatedCheckedState);
  }

  const filterByNation = item => {
    if (nationFilters.length === 0) {
      return true;
    }
    return nationFilters.includes(item.nationality);
  }

  //Region filters
  function addRegionFilter(region, updatedCheckedState) {
    setRegionFilters([...regionFilters, region]);
    setCheckedRegionFilter(updatedCheckedState);
  }

  const removeRegionFilter = (region, updatedCheckedState) => {
    setRegionFilters(regionFilters.filter(addRegionFilter => addRegionFilter !== region));
    setCheckedRegionFilter(updatedCheckedState);
  }

  const filterByRegion = item => {
    if (regionFilters.length === 0) {
      return true;
    }
    return regionFilters.includes(item.region);
  }

  //search filter
  function addSearch(driver) {
    setSearchFilter(driver);
  }

  const searchDriver = item =>{
    if (searchFilter === ""){
      return true;
    }
    return item.firstName.toLowerCase().includes(searchFilter) || item.lastName.toLowerCase().includes(searchFilter)
  }

  // sorting functions 
  function changedSort(updatedCheckedState){
    setCheckedSortFilter(updatedCheckedState);
  }

  const applySort = (a,b) => {
    if (checkedSortFilter[1]){
      return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    } else if (checkedSortFilter[2]){
      return b.lastName.toLowerCase() > a.lastName.toLowerCase() ? 1 : -1
    } else if (checkedSortFilter[3]){
      return b.races - a.races
    } else if (checkedSortFilter[4]){
      return a.races - b.races
    } else if (checkedSortFilter[5]){
      return b.Wins - a.Wins
    } else if (checkedSortFilter[6]){
      return a.Wins - b.Wins
    } else if (checkedSortFilter[7]){
      return b.podiums - a.podiums
    } else if (checkedSortFilter[8]){
      return a.podiums - b.podiums
    } else if (checkedSortFilter[9]){
      return b.points - a.points
    } else if (checkedSortFilter[10]){
      return a.points - b.points
    } else{
      return true;
    }
  }
 

  
  //favorites
  function toggleFavoritesFilter(updatedCheckedState){
    setFavoriteFilter(updatedCheckedState);
  }

  function addOrRemoveFavorite(driver){
    if (driver.favorites === false){
      driver.favorites = true;
      setNumDrivers(numDrivers+1);
      console.log(driver);
    }else if (driver.favorites === true) {
        driver.favorites = false;
        setNumDrivers(numDrivers-1);
      }
  }

  const applyFavorites = (item) => {
    if (favoriteFilter[1]){
      return item.wc === true;
    } 
    if (favoriteFilter[2]){
      return item.favorites === true;
    } else{
      return true;
    }
  }

  const clearFavorites = () => {
    for(let i = 0; i<f1Data.length; i++){
      f1Data[i].favorites=false;
    }
    setNumDrivers(0);
  }

  function changedSeason(season, updatedCheckedState){
    setSeasonFilter(season);
    setCheckedSeasonFilter(updatedCheckedState);
  }

  const filterBySeason = item => {
    if (seasonFilter === "All") {
      return true;
    }
    return item.season.includes(seasonFilter);
  }

  //clear all filters
  const clearAllFilters = () => {
    setSearchFilter("");
    setTeamFilters([]);
    setCheckedTeamFilter([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    setRegionFilters([]);
    setCheckedRegionFilter([false, false, false, false, false, false]);
    setNationFilters([]);
    setCheckedNationFilter([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    setFavoriteFilter([true, false, false]);
    setCheckedSortFilter([true, false, false, false, false, false, false, false, false, false, false]);
    setSeasonFilter("All");
    setCheckedSeasonFilter([true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  }

  const filteredArray = f1Data.filter(item => filterBySeason(item)).filter(item => filterByRegion(item)).filter(item => filterByTeam(item)).filter(item => filterByNation(item)).filter(item => searchDriver(item)).filter(item => applyFavorites(item));
  filteredArray.sort((a,b) => applySort(a,b));

  return (
    <div className="App">
      <div className="navbar">
        {<NavbarItem addTeamFilter={addTeamFilter} addRegionFilter={addRegionFilter} removeTeamFilter={removeTeamFilter} removeRegionFilter={removeRegionFilter} changedSort={changedSort} checkedSortFilter={checkedSortFilter} addSearch={addSearch} toggleFavoritesFilter={toggleFavoritesFilter} removeNationalityFilter={removeNationalityFilter} favoriteFilter={favoriteFilter} clearFavorites={clearFavorites} addNationalityFilter={addNationalityFilter} clearAllFilters={clearAllFilters} checkedTeamFilter={checkedTeamFilter} checkedRegionFilter={checkedRegionFilter} checkedNationFilter={checkedNationFilter} checkedSeasonFilter={checkedSeasonFilter} changedSeason={changedSeason}/>}
      </div>

      <div className="main-container">
          <div className="item-grid">
            {filteredArray.map((item, index) => {
              return (<DriverItem key={index} item={item} addOrRemoveFavorite={addOrRemoveFavorite}/>)
            })}
          </div>
      </div>
      <div className="no-drivers">
        {(filteredArray.length > 0) ? (<p></p>) : (<h4>No Drivers Found...</h4>)}
      </div>
      <div className="back-to-top">
        <BsFillArrowUpCircleFill size={"3rem"} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}/>
      </div>
    </div>

    
  );
}

export default App;
