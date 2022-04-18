import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import useStyles from "./styles";
import PropTypes from "prop-types";

export default function DataGridDemo(props) {
  const { data, columns, handleRowClick, handleCellClick } = props;
  const classes = useStyles();

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rowHeight={120}
        className={classes.root}
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

DataGridDemo.propTypes = {
  handleRowClick: PropTypes.func,
  handleCellClick: PropTypes.func,
  data: PropTypes.array,
  columns: PropTypes.array,
};
DataGridDemo.defaultProps = {
  handleRowClick: () => {},
  handleCellClick: () => {},
  data: false,
  columns: false,
};
