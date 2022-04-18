import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import GridTable from "../../components/commons/GridTable";
import { CircularProgress } from "@material-ui/core";
import { getStaff } from "../../helpers/request";
import globalStyles from "../../shared/globalStyles";
import columns from './TableColumns';

const List = () => {
  const history = useHistory();
  const classes = globalStyles();
  const [staffList, setStaffList] = useState();
  useEffect(() => {
    getStaff("/users")
      .then((res) => {
        console.log(res);
        setStaffList(res);
      })
      .catch((err) => {
        console.log("Failed to get staff data : ", err);
      });
  }, []);
  const handleCellClick = (param, event) => {
    console.log(param);
    console.log(event);
    if (param.colIndex === 2) {
      event.stopPropagation();
    }
  };

  const handleRowClick = (param, event) => {
    console.log("Row:");
    console.log(param);
    console.log(event);
  };

  if (!staffList) {
    return (
      <div className={classes.rootLoader}>
        <CircularProgress size={35} />
      </div>
    );
  }
  return (
    <div style={{ height: 500, width: "100%" }}>
      <GridTable
        handleCellClick={handleCellClick}
        handleRowClick={handleRowClick}
        data={staffList}
        columns={columns(history)}
      />
    </div>
  );
};
export default List;
