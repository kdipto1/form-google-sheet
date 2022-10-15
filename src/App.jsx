import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const submitData = async (event) => {
    event.preventDefault();
    const Name = event.target.Name.value;
    const Email = event.target.Email.value;
    const body = { Name, Email };
    await axios({
      method: "post",
      url: `https://script.google.com/macros/s/AKfycbx61YeWrDvZds69YHufKVfNvcRf6CH4kF9g3mXLzDxMrVcd3EjaLI-R9iI2L72UpjKkdQ/exec`,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          toast("Data added to google sheet");
          event.target.Name.value=""
          event.target.Email.value=""
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="bg-warning">
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form onSubmit={submitData}>
          <input
            className="mt-2 form-control"
            name="Email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="mt-2 form-control"
            name="Name"
            type="text"
            placeholder="Name"
            required
          />
          <button className="mt-2 btn btn-outline-secondary" type="submit">
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default App;
