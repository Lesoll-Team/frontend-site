import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button, User } from "@nextui-org/react";
import {deleteUsers, searchUsersApi } from "../utils/userAPI";
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
import UserUpdateModule from "../model/users/UpdateUserData";
const columns = [
  { name: "User", uid: "fullname" },
  { name: "Phone", uid: "phone" },
  { name: "Type & Email", uid: "typeOfUser" },
  { name: "Created", uid: "createdAt" },
  { name: "ACTIONS & ID", uid: "actions" },
];
export default function UserDashboard() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [users, setUsers] = useState([]);
  const [usersLength, setUsersLength] = useState(0);
  const [usersLengthOfAPI, setUsersLengthOfAPI] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [refreshUsers, setRefreshUsers] = useState(false);

  // const [filterValue, setFilterValue] = useState("");
  const [filterUser, setFilterUser] = useState("");

  // const fetchUsersData = async () => {
  //   try {usersLengthOfAPI
  //     const userToken = JSON.parse(localStorage.getItem("userToken"));
  //     const getUsers = await getAllUsers(rowsPerPage, page, userToken);
  //     setUsers(getUsers.data);
  //     setUsersLength(getUsers.nPages);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  const searchUsers = async () => {
    try {
      const getUser = await searchUsersApi(rowsPerPage, page, filterUser);
      setUsers(getUser.User);
      setUsersLength(getUser.resultCount);
      setUsersLengthOfAPI(getUser.resultCount)
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([])
      setUsersLength(0)
    }
  };

  const handleDeleteUser = async (UserId) => {
    try {
      await deleteUsers(UserId);
      // await fetchUsersData();
      await searchUsers();
      setRefreshUsers(!refreshUsers);
    } catch (error) {
      console.error("Error deleting Users:", error);
    }
  };
  useEffect(() => {
    // fetchUsersData();
    searchUsers();
  }, [page, rowsPerPage, refreshUsers]);

  const [sortDescriptor, setSortDescriptor] = useState({});
  const pages = Math.ceil(usersLength / rowsPerPage);
  // const hasSearchFilter = Boolean(filterValue);
  const hasSearchAllUser = Boolean(pages<=1);
  const headerColumns = useMemo(() => {
    return columns.filter((column) => column.uid);
  });
  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];
    // if (hasSearchFilter) {
    //   filteredUsers = filteredUsers.filter(
    //     (user) =>
    //       user.fullname.toLowerCase().includes(filterValue.toLowerCase()) ||
    //       user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
    //       user.phone.toLowerCase().includes(filterValue.toLowerCase())
    //   );
    // }
// console.log("filteredUsers",filteredUsers);
    if (hasSearchAllUser) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.fullname.toLowerCase().includes(filterUser.toLowerCase()) ||
          user.email.toLowerCase().includes(filterUser.toLowerCase()) ||
          user.phone.toLowerCase().includes(filterUser.toLowerCase())||
          user.typeOfUser.toLowerCase().includes(filterUser.toLowerCase())
      );
    }
    return filteredUsers;
  }, [users,filterUser]);

  // console.log("filteredItems", filteredItems);//allows update

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end) && filteredItems;
    // return filteredItems
  }, [page, filteredItems, rowsPerPage]);
  // console.log("itme dot length", items);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);
  {
    // console.log("sorting item :", sortedItems);
  }
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
              <DropdownMenu aria-label="Options Menu User">
                <DropdownItem
                  textValue="Delete"
                  aria-labelledbyl="Options Menu User"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </DropdownItem>
                {/* <DropdownItem
                  textValue="Ban"
                  onClick={async () => await banUser(user._id)}
                >
                  Ban
                </DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
            <UserUpdateModule
              typeUser={user.typeOfUser}
              userID={user._id}
              userIsAdmin={user.isAdmin}
            />
          </div>
        );
    }
  }, []);
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearch = useCallback((value) => {
    if (value) {
      setFilterUser(value);
      setPage(1);
    } else {
      setFilterUser("");
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex  gap-3 items-center justify-center ">

          <div className=" w-8/12  ">
            <form
              className="flex items-center gap-x-2"
              onSubmit={(e) => {
                e.preventDefault(); // Prevents the default form submission behavior
                searchUsers(); // Call your search function
              }}
            >
              <Input
                isClearable
                className="w-full"
                // classNames={{
                //   base: "w-full sm:max-w-[44%]",
                //   inputWrapper: "border-1",
                // }}
                placeholder="phone, email ,full name,type Of User..."
                label="Search For All Users"
                size="sm"
                startContent={<SearchIcon className="text-default-300" />}
                value={filterUser}
                variant="bordered"
                onClear={() => setFilterUser("")}
                onChange={(e) => onSearch(e.target.value)}
              />
              <Button color="primary" type="submit">
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {usersLengthOfAPI} users
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
              <option value="30">30</option>
              <option value="60">60</option>
              {/* <option value={`${usersLength/2}`}>All</option> */}
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterUser,
    onSearch,
    // onSearchChange,
    onRowsPerPageChange,
    usersLength,
    // hasSearchFilter,
    hasSearchAllUser,
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
          isDisabled={hasSearchAllUser}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [items.length, page, pages,hasSearchAllUser, selectedKeys]);
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
      onSortChange={setSortDescriptor}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
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
