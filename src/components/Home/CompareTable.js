import React from "react";
import styles from "../../styles/Home.module.css";

function CompareTable({ data }) {
  return (
    <>
      {data.length ? (
        <table className={styles.compareTable}>
          <tr>
            <td></td>
            {data.map((el) => (
              <td>{el.employee_name}</td>
            ))}
          </tr>
          <tr>
            <td style={{ backgroundColor: "#F9F9F9" }}>employee_salary</td>
            {data.map((el) => (
              <td key={el.id}>${el.employee_salary}</td>
            ))}
          </tr>
          <tr>
            <td style={{ backgroundColor: "#F9F9F9" }}>employee_name</td>
            {data.map((el) => (
              <td key={el.id}>{el.employee_name}</td>
            ))}
          </tr>

          <tr>
            <td style={{ backgroundColor: "#F9F9F9" }}>employee_age</td>
            {data.map((el) => (
              <td
                key={el.id}
                style={{ backgroundColor: "#FF715B", color: "white" }}
              >
                {el.employee_age}
              </td>
            ))}
          </tr>
        </table>
      ) : (
        false
      )}
    </>
  );
}

export default CompareTable;
