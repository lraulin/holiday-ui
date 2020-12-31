import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const URL = "http://127.0.0.1:5000/holiday";
const URL = "http://lraulin.pythonanywhere.com/holiday";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function App() {
  // const [date, setDate] = useState(new Date(2021, 1, 1));
  const date = "2021-01-01";
  const [csv, setCsv] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    console.log("POSTING...");
    // const formattedDate = date.toISOString().slice(0, 10);
    postData(URL, { date, csv }).then((data) => {
      setOutput(data);
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };

  return (
    <div className="App">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <DatePicker selected={date} onChange={(date) => setDate(date)} /> */}
          <Form.Label>Paste booker export here</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <h3>Output</h3>
      <p>{output}</p>
    </div>
  );
}

export default App;
