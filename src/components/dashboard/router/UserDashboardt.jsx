import { useCallback, useEffect, useMemo, useState } from "react";
import { searchUsersApi } from "../utils/userAPI";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const columns = [
  { name: "User", uid: "fullname" },
  { name: "Phone", uid: "phone" },
  { name: "Type & Email", uid: "typeOfUser" },
  { name: "Created", uid: "createdAt" },
  { name: "Properties", uid: "Propertycount" },
  { name: "Properties Paid", uid: "ProperrtyPaid" },
];
export default function UserDashboard() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [users, setUsers] = useState([]);
  const [usersLength, setUsersLength] = useState(0);
  const [usersLengthOfAPI, setUsersLengthOfAPI] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [filterUser, setFilterUser] = useState("");

  const searchUsers = async () => {
    try {
      const getUser = await searchUsersApi(rowsPerPage, page, filterUser);
      setUsers(getUser.User);
      setUsersLength(getUser.resultCount);
      setUsersLengthOfAPI(getUser.resultCount);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
      setUsersLength(0);
    }
  };

  useEffect(() => {
    // fetchUsersData();
    searchUsers();
  }, [page, rowsPerPage]);

  const [sortDescriptor, setSortDescriptor] = useState({});
  const pages = Math.ceil(usersLength / rowsPerPage);
  const hasSearchAllUser = Boolean(pages <= 1);
  const headerColumns = useMemo(() => {
    return columns.filter((column) => column.uid);
  });
  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchAllUser) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.fullname.toLowerCase().includes(filterUser.toLowerCase()) ||
          user.email.toLowerCase().includes(filterUser.toLowerCase()) ||
          user.phone.toLowerCase().includes(filterUser.toLowerCase()),
      );
    }
    return filteredUsers;
  }, [users, filterUser]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end) && filteredItems;
    // return filteredItems
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((user, columnKey) => {
    switch (columnKey) {
      case "fullname":
        return (
          <Link
            href={`/dashboard/user-details/${user?.username}`}
            className="flex items-center gap-x-3 hover:bg-gray-100"
          >
            <Image
              width={60}
              height={60}
              src={user?.avatarUrl || "/user-avatar-placeholder.png"}
              className="min-w-[50px] min-h-[50px] "
              loading="lazy"
              alt=" user avatar "
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{user.fullname}</span>
              <p className="text-bold text-tiny capitalize text-default-500">
                {user.typeOfUser}
              </p>
            </div>
          </Link>
        );

      case "typeOfUser":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.email}
            </p>
            <span className="text-sm text-gray-500">{user.username}</span>
          </div>
        );

      case "createdAt":
        const formattedDate = new Date(user.createdAt).toLocaleString("en-US");
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {formattedDate}
            </p>
          </div>
        );
      case "phone":
        return (
          <div className="relative flex justify-start items-center gap-2">
            <span className="text-sm text-gray-500"> {user.phone}</span>
          </div>
        );
      case "Propertycount":
        return (
          <div className="relative flex justify-start items-center gap-2">
            <span className="text-sm text-gray-500"> {user.Propertycount}</span>
          </div>
        );
      case "ProperrtyPaid":
        return (
          <div className="relative flex justify-start items-center gap-2">
            <span className="text-sm text-gray-500"> {user.ProperrtyPaid}</span>
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
          <div className=" w-8/12 mt-5 ">
            <form
              className="flex items-center gap-x-2"
              onSubmit={(e) => {
                e.preventDefault(); // Prevents the default form submission behavior
                searchUsers(); // Call your search function
              }}
            >
              <input
                className="w-full border-1 border-gray1 bg-white rounded-lg p-2 indent-3"
                placeholder="phone, email ,full name,type Of User..."
                value={filterUser}
                onChange={(e) => onSearch(e.target.value)}
              />

              <button
                className="bg-blue-600 text-white p-2 rounded-md"
                type="submit"
              >
                Search
              </button>
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
  }, [items.length, page, pages, hasSearchAllUser, selectedKeys]);
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
    [],
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
