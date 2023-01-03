import '../App.css';
import { Button, Container, Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';

export function NavbarItem({addTeamFilter, addRegionFilter, removeTeamFilter, removeRegionFilter, changedSort, checkedSortFilter, addSearch, toggleFavoritesFilter, favoriteFilter, clearFavorites, addNationalityFilter, removeNationalityFilter, clearAllFilters, checkedTeamFilter, checkedRegionFilter, checkedNationFilter, checkedSeasonFilter, changedSeason}){
  const sortFilters = [{name: "None"}, {name: "Last Name (A-Z)"}, {name: "Last Name (Z-A)"}, {name: "Races (descending)"}, {name: "Races (ascending)"}, {name: "Wins (descending)"}, {name: "Wins (ascending)"}, {name: "Podiums (descending)"}, {name: "Podiums (ascending)"}, {name: "Points (descending)"}, {name: "Points (ascending)"}];
  const driversFilters = [{name: "All"}, {name: "World Champions"}, {name: "Favorites"}];
  const teamFilters = [{name: "Red Bull"}, {name: "Ferrari"}, {name: "Mercedes"}, {name: "McLaren"}, {name: "Alpine"}, {name:  "Alfa Romeo"}, {name: "Aston Martin"}, {name: "Haas"}, {name: "AlphaTauri"}, {name: "Williams"}, {name: "Toro Rosso"}, {name: "Sauber"}, {name: "Racing Point"}, {name: "Force India"}, {name: "Renault"}, {name: "Hispania"}, {name: "Manor"}, {name: "Minardi"}, {name: "Lotus"}, {name: "Caterham"}, {name: "Benetton"}, {name: "BAR"}, {name: "Honda"}, {name: "Brawn"}, {name: "Marussia"}, {name: "Spyker"}, {name: "Toyota"}, {name: "Jaguar"}, {name: "Virgin"}, {name: "Jordan"}, {name: "Arrows"}, {name: "Prost"}, {name: "Stewart"}, {name: "Super Aguri"}, {name: "Forti"}, {name: "BMS Scuderia Italia"}, {name: "Midland"}, {name: "Ligier"}, {name: "Simtek"}, {name: "Footwork"}, {name: "Tyrrell"}]
  const regionFilters = [{name: "Europe"}, {name: "Asia"}, {name: "North America"},{name: "South America"}, {name: "Oceania"}, {name: "Africa"}]
  const nationFilters = [{name: "Netherlands"}, {name: "Mexico"}, {name: "Monaco"}, {name: "Spain"}, {name: "United Kingdom"}, {name: "Australia"}, {name: "France"}, {name: "Finland"}, {name: "China"}, {name: "Germany"}, {name: "Canada"}, {name: "Denmark"}, {name: "Japan"}, {name: "Thailand"}, {name: "Russia"}, {name: "Italy"}, {name: "Poland"}, {name: "Brazil"}, {name: "Belgium"}, {name: "Sweden"}, {name: "New Zealand"}, {name: "Indonesia"}, {name: "Venezuela"}, {name: "USA"}, {name: "India"}, {name: "Switzerland"}, {name: "Austria"}, {name: "Columbia"}, {name: "Portugal"}, {name: "Hungary"}, {name: "Ireland"}, {name: "Malaysia"}, {name: "Argentina"}, {name: "Czech Republic"}]
  const seasonFilters = [{season: "All"}, {season: "2022"}, {season: "2021"}, {season: "2020"}, {season: "2019"}, {season: "2018"}, {season: "2017"}, {season: "2016"}, {season: "2015"}, {season: "2014"}, {season: "2013"}, {season: "2012"}, {season: "2011"}, {season: "2010"}, {season: "2009"}, {season: "2008"}, {season: "2007"}, {season: "2006"}, {season: "2005"}, {season: "2004"}, {season: "2003"}, {season: "2002"}, {season: "2001"}, {season: "2000"}];

  const handleTeamFilterChange = (position, team) => {
    const updatedCheckedState = [...checkedTeamFilter];
    updatedCheckedState[position] = !updatedCheckedState[position];

    if (updatedCheckedState[position] === true){
        addTeamFilter(team, updatedCheckedState)
    } else {
        removeTeamFilter(team, updatedCheckedState)
    }
  }

  const handleNationalityFilterChange = (position, nation) => {
    const updatedCheckedState = [...checkedNationFilter];
    updatedCheckedState[position] = !updatedCheckedState[position];

    if (updatedCheckedState[position] === true) {
        addNationalityFilter(nation, updatedCheckedState)
    } else {
        removeNationalityFilter(nation, updatedCheckedState)
    }
  }

  const handleRegionFilterChange = (position, region) => {
    const updatedCheckedState = [...checkedRegionFilter];
    updatedCheckedState[position] = !updatedCheckedState[position];

    if (updatedCheckedState[position] === true) {
        addRegionFilter(region, updatedCheckedState)
    } else {
        removeRegionFilter(region, updatedCheckedState)
    }
  }

  const handleSortChange = (position) => {
    const checkedDefault = [true, false, false, false, false, false, false, false, false, false, false];
    const updatedCheckedState = checkedDefault.map((item, index) => 
      index === position ? true : false
    );

    changedSort(updatedCheckedState);
  }

  const handleSearchChange = (event) =>{
    addSearch(event.target.value.trim().toLowerCase());
  }
  
  const handleToggleFavorites = (position) =>{
    const checkedDefault = [true, false, false];
    const updatedCheckedState = checkedDefault.map((item, index) => 
      index === position ? true : false
    );
    toggleFavoritesFilter(updatedCheckedState);
  }

  const handleSeasonChange = (position, season) => {
    const checkedDefault = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const updatedCheckedState = checkedDefault.map((item, index) => 
      index === position ? true : false
    );

    changedSeason(season, updatedCheckedState);
  }

  return(
  <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed='top'>
    <Container fluid>
      <Navbar.Brand>F1 Drivers 2000-2022</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" navbarScroll>
        {/* <NavDropdown title="Key" id="collasible-nav-dropdown">
          <Dropdown.ItemText className="labels">W - Wins</Dropdown.ItemText>
          <Dropdown.ItemText className="labels">P - Podiums</Dropdown.ItemText>
          <Dropdown.ItemText className="labels">Pts - Points</Dropdown.ItemText>
        </NavDropdown> */}

        <NavDropdown title="Drivers" id="collasible-nav-dropdown">
            <div className="filter-group">
              {driversFilters.map(({ name }, index) => {
                return(
                  <label className="labels">
                    <input type="checkbox" checked={favoriteFilter[index]} onChange={() => handleToggleFavorites(index)}/>
                    {name}
                  </label>
                );
              })}
            </div>
          </NavDropdown>

          <NavDropdown title="Sort" id="collasible-nav-dropdown">
            <div className="filter-group">
              {sortFilters.map(({ name }, index) => {
                return(
                  <label className="labels">
                    <input type="checkbox" checked={checkedSortFilter[index]} onChange={() => handleSortChange(index)}/>
                    {name}
                  </label>
                );
              })}
            </div>
          </NavDropdown>
          <NavDropdown title="Teams" id="collasible-nav-dropdown">
            <div className="filter-group">
                {teamFilters.map(({ name }, index) => {
                  return(
                    <label className="labels">
                      <input type="checkbox" checked={checkedTeamFilter[index]} onChange={() => handleTeamFilterChange(index, name)}/>
                      {name}
                    </label>
                  );
                })}
              </div>
          </NavDropdown>

          <NavDropdown title="Nationality" id="collasible-nav-dropdown">
            <div className="filter-group">
                {nationFilters.map(({ name }, index) => {
                  return(
                    <label className="labels">
                      <input type="checkbox" checked={checkedNationFilter[index]} onChange={() => handleNationalityFilterChange(index, name)}/>
                      {name}
                    </label>
                  );
                })}
              </div>
          </NavDropdown>

          <NavDropdown title="Region" id="collasible-nav-dropdown">
            <div className="filter-group">
                {regionFilters.map(({ name }, index) => {
                  return(
                    <label className="labels">
                      <input type="checkbox" checked={checkedRegionFilter[index]} onChange={() => handleRegionFilterChange(index, name)}/>
                      {name}
                    </label>
                  );
                })}
            </div>
          </NavDropdown>

          <NavDropdown title="Season" id="collasible-nav-dropdown">
            <div className="filter-group">
                {seasonFilters.map(({ season }, index) => {
                  return(
                    <label className="labels">
                      <input type="checkbox" checked={checkedSeasonFilter[index]} onChange={() => handleSeasonChange(index, season)}/>
                      {season}
                    </label>
                  );
                })}
            </div>
          </NavDropdown>
          
          <Button className="me-2" variant="outline-warning" onClick={clearFavorites}>Clear Favorites</Button>
          <Button className="me-2" variant="outline-danger" onClick={clearAllFilters}>Clear Filters</Button>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by Driver..."
              className="me-2"
              aria-label="Search"
              onChange={event => handleSearchChange(event)}
            />
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}