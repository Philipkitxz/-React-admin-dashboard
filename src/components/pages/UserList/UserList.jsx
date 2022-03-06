import React from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";

export const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow Jon",
      avatar:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      email: "Johnsow@gmail.com",
      Status: "active",
      transaction: "$ 120",
    },
    {
      id: 2,
      lastName: "Snow Jon",
      avatar:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      email: "Johnsow@gmail.com",
      Status: "active",
      transaction: "$ 120",
    },
    {
      id: 3,
      lastName: "Snow Jon",
      avatar:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      email: "Johnsow@gmail.com",
      Status: "active",
      transaction: "$ 120",
    },
    {
      id: 4,
      lastName: "Snow Jon",
      avatar:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      email: "Johnsow@gmail.com",
      Status: "active",
      transaction: "$ 120",
    },
    {
      id: 5,
      lastName: "Snow Jon",
      avatar:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      email: "Johnsow@gmail.com",
      Status: "active",
      transaction: "$ 120",
    },
  ];
  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
