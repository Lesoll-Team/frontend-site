import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue,Input} from "@nextui-org/react";

import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
// import {EyeIcon} from "./EyeIcon";
import {columns, users} from "./data";
import UserModule from './UserModule';
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
function Dashboard() {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}  
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">

            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
 <div className="flex w-full flex-col ">
      <Tabs aria-label="Options">

      <Tab key="Details" title="Details">
          <Card>
            <CardBody>
            </CardBody>
          </Card>  
        </Tab>

        <Tab key="Property" title="Property">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>

        <Tab key="User" title="Users">
          <Card>
            <CardBody>
            <Input
      isClearable
      type="email"
      label="Search"
      variant="bordered"
      placeholder="Search Phone Or User Name"
      onClear={() => console.log("input cleared")}
      className="max-w-full"
    />
            <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
            </CardBody>
          </Card>  
        </Tab>

        <Tab key="Blog" title="Blogs">
          <Card>
            <CardBody>
            </CardBody>
          </Card>  
        </Tab>

      </Tabs>

      
      
    </div>  
  )
}

export default Dashboard