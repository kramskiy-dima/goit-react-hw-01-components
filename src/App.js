import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./bd/user.json";
import staticalData from "./bd/statistical-data.json";

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
    </div>
  );
}

export default App;
