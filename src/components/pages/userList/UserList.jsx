import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 45 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      userName: "Anh Tran",
      avatar: "assets/me.png",
      email: "anhtt@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      userName: "Anh Tran",
      avatar: "assets/me.png",
      email: "anhtt@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      userName: "Anh Tran",
      avatar: "assets/me.png",
      email: "anhtt@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      userName: "Anh Tran",
      avatar: "assets/me.png",
      email: "anhtt@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      userName: "Anh Tran",
      avatar: "assets/me.png",
      email: "anhtt@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
