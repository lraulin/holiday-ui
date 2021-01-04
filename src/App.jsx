import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import DatePicker from "react-datepicker";
import CopyButton from "./CopyButton";
import "react-datepicker/dist/react-datepicker.css";
import { updateClipboard, postData } from "./lib";

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
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
      const { csv, super_admin_list } = await postData(
        process.env.REACT_APP_API_URL,
        {
          date,
          csv: reader.result,
        }
      );
      setOutput(csv);
      localStorage.setItem("output", csv);
      if (super_admin_list) {
        const names = super_admin_list.sort().join(", ");
        setApprovalNeeded(names);
        localStorage.setItem("super_admin_list", names);
      }
    };

    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const clearData = () => {
    setOutput("");
    setApprovalNeeded("");
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
          {approvalNeeded.split(", ").map((name) => (
            <span onClick={() => updateClipboard(name)}>{name},</span>
          ))}
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
                          {Number.parseFloat(total) >= 2000 ? (
                            <td style={{ color: "red" }}>${total}</td>
                          ) : (
                            <td>${total}</td>
                          )}
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
