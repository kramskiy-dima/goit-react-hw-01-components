import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import user from "./bd/user.json";
import staticalData from "./bd/statistical-data.json";
import friends from "./bd/friends.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={staticalData} />
      <Statistics stats={staticalData} />
      <FriendListItem props={friends} />
    </div>
  );
}

export default App;
