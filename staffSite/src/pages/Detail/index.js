
import React, { useState, useEffect } from "react";
import { 
  CircularProgress,
  Typography,
  TextField
} from "@material-ui/core";
import moment from 'moment';

import GridTable from "../../components/commons/GridTable";
import { getStaff } from "../../helpers/request";
import globalStyles from "../../shared/globalStyles";

const DetailPage = () => {
  const classes = globalStyles();
  const [staffData, setstaffData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setstaffData({
        name: 'Test',
        grade: 'PG',
        joinDate: moment().format('DD-MM-YYYY'),
        currentTeam: 'CDC',
        teamJoinDate: moment().format('DD-MM-YYYY'),
        teamHistory: [
          {
            id: 1,
            name: 'CDC',
            joinDate: moment().format('DD-MM-YYYY'),
            endDate: moment().format('DD-MM-YYYY'),
          }
        ]
      })
    }, 1500);
  }, []);

  const columns = () => [
    
    {
      field: "name",
      headerName: "Project Name",
      type: "text",
      //width: 90,
      minWidth: 90,
      flex: 1,
      align: "left"
    },{
      field: "joinDate",
      headerName: "Join Date",
      type: "text",
      //width: 90,
      minWidth: 90,
      flex: 1
      //align: "left"
    },
    {
      field: "endDate",
      headerName: "End Date",
      type: "text",
      //width: 90,
      minWidth: 90,
      flex: 1
      //align: "left"
    },
  ]

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

  if (!staffData) {
    return (
      <div className={classes.rootLoader}>
        <CircularProgress size={35} />
      </div>
    );
  }
  return (
    <div style={{ height: 500, width: "100%" }}>
      <div className="detail-wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px'}}>
        <div className="left">
          <Typography component="h6" variant="h6">
            Name: {staffData.name || ''}
          </Typography>
          <Typography component="h6" variant="h6">
            Grade: {staffData.grade || ''}
          </Typography>
          <Typography component="h6" variant="h6">
            Join Date: {staffData.joinDate || ''}
          </Typography>
        </div>
        <div className="right" style={{minWidth: '200px', textAlign: 'left'}}>
          <Typography component="h6" variant="h6">
            Current Team: {staffData.currentTeam || ''}
          </Typography>
          <Typography component="h6" variant="h6">
            Join Date: {staffData.teamJoinDate || ''}
          </Typography>
        </div>
      </div>
      <div className="history-wrapper">
        <GridTable
          handleCellClick={handleCellClick}
          handleRowClick={handleRowClick}
          data={staffData.teamHistory}
          columns={columns(history)}
        />
      </div>
    </div>
  );
};
export default DetailPage;
