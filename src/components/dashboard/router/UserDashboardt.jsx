import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button, User } from "@nextui-org/react";
import { getAllUsers, deleteUsers } from "../utils/userAPI";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SearchIcon } from "../icon/SearchIcon";
import { VerticalDotsIcon } from "../icon/VerticalDotsIcon";
import EditModule from "../model/EditModule";
import UserUpdateModule from "../model/users/UpdateUserData"
const columns = [
  { name: "User", uid: "fullname" },
  { name: "Phone", uid: "phone" },
  { name: "Type & Email", uid: "typeOfUser" },
  { name: "Created", uid: "createdAt" },
  { name: "ACTIONS & ID", uid: "actions" },
];
export default function UserDashboard() {
  const [users, setUsers] = useState([]);
  // console.log(users);
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const getUsers = await getAllUsers(userToken);
        setUsers(getUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsersData();
  }, []);
  // const [newUserData, setNewUserData] = useState({
  //   isAdmin: false,
  //   fullname: "YESO",
  //   phone: "010010010",
  // });
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({});
  const [page, setPage] = useState(1);
  const pages = Math.ceil(users.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);
  const headerColumns = useMemo(() => {
    return columns.filter((column) => column.uid);
  });
  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.fullname.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.phone.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [users, filterValue]);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  // const UpdateUserData = async (UserID) => {
  //   try {
  //     const getDataUpdate = await updateUsers(UserID, newUserData);
  //     // console.log(getDataUpdate);
  //   } catch (error) {
  //     console.error("Error Update User Data:", error);
  //   }
  // };

  const renderCell = useCallback((user, columnKey) => {
    switch (columnKey) {
      case "fullname":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: user.avatarUrl }}
            classNames={{
              description: "text-default-500",
            }}
            description={user.username}
            name={user.fullname}
          ></User>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.phone}
            </p>
          </div>
        );
      case "typeOfUser":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.email}
            </p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.typeOfUser}
            </p>
          </div>
        );

      case "createdAt":
        const formattedDate = new Date(user.createdAt).toLocaleString();
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {formattedDate}
            </p>
          </div>
        );

      case "actions":
        return (
          <div className="relative flex justify-start items-center gap-2">
            {user._id}
            <Dropdown
              aria-label="Options Menu User"
              aria-labelledbyl="Options Menu User"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger
                aria-label="Options Menu User"
                aria-labelledbyl="Options Menu User"
              >
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Options Menu User"
                aria-labelledbyl="Options Menu User"
              >
                <DropdownItem
                  textValue="Delete"
                  onClick={async () => await deleteUsers(user._id)}
                >
                  Delete
                </DropdownItem>
                <DropdownItem textValue="Ban">Ban</DropdownItem>
              </DropdownMenu>
            </Dropdown>
                <UserUpdateModule userID={user._id} isAdmin={false}/>{/*user.isAdmin*/}
          </div>
        );
    }
  }, []);
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);
  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          {/* <div className="flex gap-3">
            <AddBlogModule />
          </div> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);
  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );
  return (
    <Table
      isCompact
      removeWrapper
      aria-label="account"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
