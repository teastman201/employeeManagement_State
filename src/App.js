import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchForm from "./components/SearchForm";

class App extends Component {
  // Setting this.state.employees to the employees json array
  // filtered adds a new state to the state objects, a filtering on the previous state.
  state = {
    employees,
    filtered: employees
  };

  handleSearch = (event) => {
    // set user query to lowercase for ease of comparison
    const query = event.target.value.toLowerCase();
    // creates a variable to stored the new filtered result
    const filtered = this.state.employees.filter(employee => {
      // takes the available employee names and set them to lowercase
      const lowerName = employee.name.toLowerCase();
      // returns to the filtered variable the queried name set to lowercase filtering as one types.
      return lowerName.includes(query);
    })
    // updates the page with the new filtered objects
    this.setState({ filtered });
  }

  handleSort = () => {
    // compares filtered employees against each other to sort them alphabetically
    const sorted = this.state.filtered.sort((employeeA, employeeB) => {
      if (employeeA.name.toLowerCase() < employeeB.name.toLowerCase()) {
        return -1;
      }
      if (employeeA.name.toLowerCase() > employeeB.name.toLowerCase()) {
        return 1;
      }
      // else statement, A must be equal to B
      return 0;
    })
    this.setState({ filtered: sorted });
  }


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Eastman Consulting Employees List</Title>
        <SearchForm
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}></SearchForm>
        {this.state.filtered.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            gender={employee.gender}
            pronouns={employee.pronouns}
            email={employee.email}
            phone={employee.phone}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
