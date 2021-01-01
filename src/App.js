import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const URL = "http://127.0.0.1:5000/holiday";
const URL = "https://lraulin.pythonanywhere.com/holiday";

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
          <Form.Label>
            <em>Paste Booker export here:</em>
          </Form.Label>
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
      <h3>Instructions (If using Windows):</h3>
      <ul>
        <li>Export Timecards from Booker.</li>
        <li>Open downloaded file with Notepad; select all and copy.</li>
        <li>Paste into textbox above and click button.</li>
      </ul>
      <h4>Optional (If you want to view it in Excel)</h4>
      <ul>
        <li>
          Scroll down to "Raw Output (CSV Text)" at bottom. Double-click output
          text; copy {"&"} paste into empty Notepad file.
        </li>
        <li>
          File {">"} Save as... Click on "Save as type" dropdown, select "All
          files (*.*)"
        </li>
        <li>Enter filename (anything you want).csv</li>
        <li>
          Now you can open the file with MS Excel (or LibreOffice Calc or other
          spreadsheet app)!
        </li>
        <li>
          (If double-clicking on the file doesn't work, try Right Click {">"}{" "}
          Open With... and selecting a spreadsheet program.)
        </li>
      </ul>
      <h3>Table</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            {output
              .split("\n")[0]
              .split(",")
              .map((header) => (
                <th>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {output
            .split("\n")
            .slice(1)
            .map((line) => (
              <tr>
                {line.split(",").map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
      <h3>Raw Output (CSV text)</h3>
      <p>{output}</p>
    </div>
  );
}

export default App;
