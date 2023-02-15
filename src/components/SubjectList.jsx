import React, { useState } from "react";
import subject_list from "./subject_list.json";
import './SubjectList.css';

const SubjectList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleRowClick = (index) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(index)) {
        return prevSelectedRows.filter((i) => i !== index);
      } else {
        return [...prevSelectedRows, index];
      }
    });
  };

  React.useEffect(() => {
    let newTotalCredit = 0;
    for (const index of selectedRows) {
      newTotalCredit += parseInt(subject_list[index].Credits);
    }
    setTotalCredit(newTotalCredit);
  }, [selectedRows]);

  return (
    <div>
        <h1>IUBAT Credits Counter</h1>
        <h3>by Mahir Morshed Deep</h3>

      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {subject_list.map((subject, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              style={{
                backgroundColor: selectedRows.includes(index)
                  ? "lightblue"
                  : "white",
              }}
            >
              <td>{subject["Courser Code"]}</td>
              <td>{subject["Courser Name"]}</td>
              <td>{subject.Credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRows.length > 0 ? (
        <p className="total-credit">
          Total Credit: {totalCredit}{" "}
          {selectedRows.length > 1 ? "for selected rows" : "for selected row"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubjectList;
