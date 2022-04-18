import React from 'react';
import Button from '@mui/material/Button';

const columns = (props) => [
    {
      field: "id",
      headerName: "ID",
      width: 70
    },
    {
      field: "username",
      headerName: "Name",
      width: 130,
      renderCell: (cellValues) => {
        return (
          <div>
            {cellValues.value}
          </div>
        );
      }
    },
    { field: "phone", headerName: "Phone Number", width: 130 },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      //width: 90,
      minWidth: 90,
      flex: 1
      //align: "left"
    },
    {
      field: "address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 160,
      flex: 2,
      //width: 160,
      renderCell: (cellValues) => {
        return (
          <div>
            {cellValues.row.address.city + ', ' + cellValues.row.address.street }
          </div>
        );
      }
    },
    // {
    //   field: 'actions',
    //   headerName: 'Actions',
    //   sortable: false,
    //   minWidth: 160,
    //   flex: 1,
    //   renderCell: (cellValues) => {
    //     return (
    //       <Button variant="text">View</Button>
    //     );
    //   }
    // }
]

export default columns;