import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import {SearchIcon} from "../icon/SearchIcon";
import {ChevronDownIcon} from "../icon/ChevronDownIcon";
import {columns,getCountUsersInDate,statusOptions} from "../utils/userData";
import {capitalize} from "../utils";
import {getAllUsers} from '../utils/userData'
import EditButton from "../model/EditModule";
import DeleteButton from "../model/DeleteModule";


// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

const INITIAL_VISIBLE_COLUMNS = [ "fullname","phone","typeOfUser" , "actions"];//"email" 

export default  function UserDashboard() {
const [users, setUsers] = React.useState([]);
//  const [startDate,setStartDate]=React.useState("2023-08-01")
//  const [endDate,setEndDate]=React.useState("2023-08-23")

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  // const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "_id",
    direction: "ascending",
  });
  
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(null);
  const [limitPages, setLimit] = React.useState(100);

  // const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);


  useEffect(() => {
    // if (startDate==null&&endDate==null) {
      
  
    const fetchData = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        const fetchedUsers = await getAllUsers(userToken,limitPages);
        setUsers(fetchedUsers.data); // Update the state with fetched user data
        // let total =Math.ceil(fetchedUsers.nPages / rowsPerPage)
        setPages(limitPages); 
        // setLimit(pages)
        // Update the state with fetched user data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData()

  // }else{
    const fetchUserInDate = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        const fetchedUsers = await getCountUsersInDate(userToken,startDate,endDate);
        setUsers(fetchedUsers.data); // Update the state with fetched user data
        let total =Math.ceil(fetchedUsers.nPages / rowsPerPage)
        setPages(total); 
        // setLimit(pages)
        // Update the state with fetched user data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUserInDate()
  // }
    // if (startDate==null&&endDate==null) {
    // fetchData();
    // }else{
    //   fetchUserInDate()
    // }
  }, [pages]);

  // console.log(users2);


  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.fullname.toLowerCase().includes(filterValue.toLowerCase())||
        user.email.toLowerCase().includes(filterValue.toLowerCase())||
        user.phone.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    // if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    //   filteredUsers = filteredUsers.filter((user) =>
    //     Array.from(statusFilter).includes(user.status),
    //   );
    // }

    return filteredUsers;
  }, [users, filterValue]);//statusFilter

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "fullname":
        return (
          <User
            avatarProps={{radius: "full", size: "sm", src: user.avatarUrl}}
            classNames={{
              description: "text-default-500",
            }}
            description={user.username}
            name={cellValue}
          >
          </User>
        );
      case "typeOfUser":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">{user.typeOfUser}</p>
          </div>
        );
      // case "status":
      //   return (
      //     <Chip
      //       className="capitalize border-none gap-1 text-default-600"
      //       color={statusColorMap[user.status]}
      //       size="sm"
      //       variant="dot"
      //     >
      //       {cellValue}
      //     </Chip>
      //   );
      case "actions":
        return (
          <div className="relative flex justify-start items-center gap-2">
  <EditButton/>
  <DeleteButton/>

          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
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
          <div className="flex gap-3">
          {/* <Chip color="success">Active<span className="px-2">{UsersActive}</span></Chip>
          <Chip color="danger">Paused <span className="px-2">{UsersPausede}</span></Chip> */}

            <Dropdown>
              <DropdownTrigger className="sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center " >
          <span className="text-default-400 text-small">Total {users.length} users</span>
          {/* <span className="text-default-400 text-small">Total {countCompany} Company</span>
          <span className="text-default-400 text-small">Total {countDevelopers} Developers</span>
          <span className="text-default-400 text-small">Total {countBroker} Broker</span>
          <span className="text-default-400 text-small">Total {countUserNotSignIn} Not sign in</span> */}
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* <option value={pages}>all</option> */}
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    // statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          // onClick={()=>setLimit(limitPages)}
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
        {/* <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span> */}
      </div>
    );
  }, [ items.length, page, pages, hasSearchFilter]);//selectedKeys,

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
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
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: " hidden",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
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
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}





//<Dropdown>
//<DropdownTrigger className=" sm:flex">{/*hidden */}
  //<Button
    //endContent={<ChevronDownIcon className="text-small" />}
    //size="sm"
    //variant="flat"
  //>
   // Status
  //</Button>
//</DropdownTrigger>
//<DropdownMenu
 // disallowEmptySelection
  //aria-label="Table Columns"
  //closeOnSelect={false}
  //selectedKeys={statusFilter}
  //selectionMode="multiple"
  //onSelectionChange={setStatusFilter}
//>
  //{statusOptions.map((status) => (
   // <DropdownItem key={status.uid} className="capitalize">
     // {capitalize(status.name)}
   // </DropdownItem>
  //))}
//</DropdownMenu>
//</Dropdown>