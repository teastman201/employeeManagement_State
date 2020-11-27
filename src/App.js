import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import SearchForm from "./components/SearchForm";

class App extends Component {
  // Setting this.state.friends to the friends json array
  // filtered adds a new state to the state objects, a filtering on the previous state.
  state = {
    friends,
    filtered: friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleSearch = (event) => {
    // set user query to lowercase for ease of comparison
    const query = event.target.value.toLowerCase();
    // creates a variable to stored the new filtered result
    const filtered = this.state.friends.filter(friend => {
      // takes the available friend names and set them to lowercase
      const lowerName = friend.name.toLowerCase();
      // returns to the filtered variable the queried name set to lowercase filtering as one types.
      return lowerName.includes(query);
    })
    // updates the page with the new filtered objects
    this.setState({ filtered });
  }

  handleSort = () => {
    // compares filtered friends against each other to sort them alphabetically
    const sorted = this.state.filtered.sort((friendA, friendB) => {
      if (friendA.name.toLowerCase() < friendB.name.toLowerCase()) {
        return -1;
      }
      if (friendA.name.toLowerCase() > friendB.name.toLowerCase()) {
        return 1;
      }
      // else statement, A must be equal to B
      return 0;
    })
    this.setState({ filtered: sorted });
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <SearchForm
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}></SearchForm>
        {this.state.filtered.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
