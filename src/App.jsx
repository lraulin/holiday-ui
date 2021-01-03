import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import DatePicker from "react-datepicker";
import CopyButton from "./CopyButton";
import "react-datepicker/dist/react-datepicker.css";

const { createObjectURL, revokeObjectURL } = global.URL;

// const API_URL = "http://127.0.0.1:5000/holiday";
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
  const [approvalNeeded, setApprovalNeeded] = useState("");

  const handleClickDownload = () => {
    const filename =
      "Holiday Pay Adjustments" + new Date().toISOString() + ".csv";
    downloadToFile(output, filename, "text/csv");
  };

  const uploadFile = (event) => {
    const fileObj = event.target.files[0]; // We've not allowed multiple files.
    const reader = new FileReader();

    try {
      reader.readAsText(fileObj); // read the filek
    } catch (e) {
      console.log(e);
    }

    reader.onload = async () => {
      console.log("POSTING...");
      const { csv, super_admin_list } = await postData(API_URL, {
        date,
        csv: reader.result,
      });
      setOutput(csv);
      const names = super_admin_list.join(", ");
      setApprovalNeeded(names);
      localStorage.setItem("output", csv);
      localStorage.setItem("super_admin_list", names);
    };

    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const clearData = () => {
    setOutput("");
    setApprovalNeeded([]);
    localStorage.removeItem("output");
    localStorage.removeItem("super_admin_list");
  };

  useEffect(() => {
    const data = localStorage.getItem("output");
    const super_admin_list = localStorage.getItem("super_admin_list");
    if (data) {
      setOutput(data);
      setApprovalNeeded(super_admin_list);
    }
  }, []);

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.File
            id="fileChooser"
            label="Choose a file created by clicking 'Export CSV' in Booker Timecards with 'Type: HOURLY' and 'Status: preapproved' filters set."
            multiple={false}
            accept=".csv,.txt,text/csv,text/plain"
            onChange={(event) => uploadFile(event)}
          />
        </Form.Group>
      </Form>
      {approvalNeeded && approvalNeeded.length ? (
        <>
          <h3>Admin Approval Needed For:</h3>
          {approvalNeeded}
        </>
      ) : null}

      {output ? (
        <div id="outputDisplay">
          <div className="float-right">
            <Button variant="danger" onClick={clearData}>
              Reset
            </Button>
            <Button variant="info" onClick={handleClickDownload}>
              Download
            </Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Created At</th>
                <th>Worker</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Total Hours</th>
                <th>Overtime</th>
                <th>Pay Rate</th>
                <th>Memo</th>
                <th>Adjustment</th>
                <th>Total</th>
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
                        total,
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
                          <td>${total}</td>
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
