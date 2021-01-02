import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import DatePicker from "react-datepicker";
import CopyButton from "./CopyButton";
import "react-datepicker/dist/react-datepicker.css";

const { createObjectURL, revokeObjectURL } = global.URL;

// const URL = "http://127.0.0.1:5000/holiday";
const API_URL = "https://lraulin.pythonanywhere.com/holiday";

const postData = async (url = "", data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = createObjectURL(file);
  a.download = filename;
  a.click();

  revokeObjectURL(a.href);
};

const App = () => {
  const date = "2021-01-01";
  const [output, setOutput] = useState("");

  const handleClickDownload = () => {
    const filename =
      "Holiday Pay Adjustments" + new Date().toISOString() + ".csv";
    downloadToFile(output, filename, "text/csv");
  };

  const uploadFile = (event) => {
    const fileObj = event.target.files[0]; // We've not allowed multiple files.
    const reader = new FileReader();

    reader.readAsText(fileObj); // read the filek

    reader.onload = async () => {
      console.log("POSTING...");
      const data = await postData(API_URL, { date, csv: reader.result });
      setOutput(data);
      console.log(data);
    };

    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.File
            id="fileChooser"
            label="Select exported Booker txt file."
            multiple={false}
            accept=".csv,.txt,text/csv,text/plain"
            onChange={(event) => uploadFile(event)}
          />
        </Form.Group>
      </Form>
      {output ? (
        <div id="outputDisplay">
          <h3>Table</h3>
          <Button variant="info" onClick={handleClickDownload}>
            Download
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <td>Created At</td>
                <td>Worker</td>
                <td>Start Time</td>
                <td>End Time</td>
                <td>Total Hours</td>
                <td>Overtime</td>
                <td>Pay Rate</td>
                <td>Memo</td>
                <td>Adjustment</td>
              </tr>
            </thead>
            <tbody>
              {output
                .split("\n")
                .slice(1)
                .map((line) => (
                  <tr>
                    {(() => {
                      const [
                        num,
                        created,
                        name,
                        start,
                        end,
                        hrs,
                        ot,
                        rate,
                        hol,
                        pay,
                      ] = line.split(",");
                      return (
                        <>
                          <td>{num}</td>
                          <td>{created}</td>
                          <td>
                            {name}
                            <div className="float-right">
                              <CopyButton text={name} />
                            </div>
                          </td>
                          <td>{start}</td>
                          <td>{end}</td>
                          <td>{hrs}</td>
                          <td>{ot}</td>
                          <td>${rate}</td>
                          <td>
                            {hol} HOL
                            <div className="float-right">
                              <CopyButton text={hol + " HOL"} />
                            </div>
                          </td>
                          <td>
                            ${pay}
                            <div className="float-right">
                              <CopyButton
                                text={Number.parseFloat(pay).toFixed(2)}
                              />
                            </div>
                          </td>
                        </>
                      );
                    })()}
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
};

export default App;
