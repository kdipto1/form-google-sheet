import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const submitData = async (event) => {
    event.preventDefault();
    const Name = event.target.Name.value;
    const Email = event.target.Email.value;
    const body = { Name, Email };
    await axios({
      method: "post",
      url: process.env.URL,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          // alert("Candidate added to database");
          refetch();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <form onSubmit={submitData}>
        <input name="Email" type="email" placeholder="Email" required />
        <input name="Name" type="text" placeholder="Name" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
