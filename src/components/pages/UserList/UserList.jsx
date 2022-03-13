import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from '../../../dummyData';
import {Link} from "react-router-dom";


export const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id)=>{
    setData(data.filter((item) =>item.id !==id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 70,
    },
    { field: "user", headerName: "User", width: 130 },
    {
      field: "avatar",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "Status",
      headerName: "Status",
      type: "text",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      type: "number",
      width: 130,
    },

    {
      field: "date",
      headerName: "Date Joined",
      type: "date",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/"+params.row.id} >
          <button className="userListEdit">Edit</button>

          </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};
