import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button } from "@nextui-org/react";
// import { useDispatch, useSelector } from "react-redux";
// import AddBlogModule from '../model/blogs/AddBlogModule'
// import {
//   deleteBlog,
// } from "@/redux-store/features/dashboard/blogDashboardSlice";
// deleteOneBlog
// import { deleteOneBlog, getAllBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
import {
  fetchAllProperty,
  deleteProperties,
  acceptProperties,
} from "../utils/propertyData";
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
const columns = [
  { name: "Title", uid: "title" },
  { name: "Created", uid: "createdAt", sortable: true }, //, sortable: true
  { name: "Updated", uid: "updatedAt" }, //, sortable: true
  { name: "ACTIONS", uid: "actions" },
];
export default function PropertyDashboard() {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const fetchAllProperties = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const getProperties = await fetchAllProperty(userToken);
        setProperty(getProperties);
      } catch (error) {
        console.error("Error fetching Properties:", error);
      }
    };
    fetchAllProperties();
  }, []);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor] = useState({});
  const [page, setPage] = useState(1);
  const pages = Math.ceil(property.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);
  const headerColumns = useMemo(() => {
    return columns.filter((column) => column.uid);
  });

  const filteredItems = useMemo(() => {
    let filteredUsers = [...property];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (blog) =>
          blog.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          blog.offer.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [property, filterValue]);

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

  const renderCell = useCallback((blog, columnKey) => {
    switch (columnKey) {
      case "title":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {blog.title}
            </p>
          </div>
        );
      case "createdAt":
        const formattedCreatedAtDate = new Date(
          blog.createdAt
        ).toLocaleString();

        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {formattedCreatedAtDate}
            </p>
          </div>
        );
      case "updatedAt":
        const formattedUpdatedAtDate = new Date(
          blog.updatedAt
        ).toLocaleString();

        return (
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {formattedUpdatedAtDate}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-start items-center gap-2">
            {blog._id}
            <Dropdown
              aria-label="Options Menu Property"
              aria-labelledbyl="Options Menu Property"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger
              aria-label="Options Menu Property"
              aria-labelledbyl="Options Menu Property">
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                                 aria-label="Options Menu Property"
              aria-labelledbyl="Options Menu Property">
                <DropdownItem

                  textValue="Delete Property"
                  onClick={async () => await deleteProperties(blog._id)}
                >
                  Delete
                </DropdownItem>
                <DropdownItem
                  textValue="Accept Property"
                  onClick={async () => await acceptProperties(blog._id)}
                >
                  Accept
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
          <div className="flex gap-3">{/* <AddBlogModule /> */}</div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {property.length} property
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
    property.length,
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
      aria-label="Example table with custom cells, pagination and sorting"
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
      <TableBody emptyContent={"No property found"} items={sortedItems}>
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

// import React from "react";
// import EditButton from "../model/EditModule";
// import DeleteButton from "../model/DeleteModule";

// import {SearchIcon} from "../icon/SearchIcon";
// import {ChevronDownIcon} from "../icon/ChevronDownIcon";
// import {columns ,properties} from "../utils/propertyData";
// import {capitalize} from "../utils";

// const INITIAL_VISIBLE_COLUMNS = ["title", "type", "createAt", "actions","id","email"];

// export default function PropertyDashboard() {
//   const [filterValue, setFilterValue] = React.useState("");
//   const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
//   const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [sortDescriptor, setSortDescriptor] = React.useState({
//     column: "createAt",
//     direction: "ascending",
//   });

//   const [page, setPage] = React.useState(1);

//   const pages = Math.ceil(properties.length / rowsPerPage);

//   const hasSearchFilter = Boolean(filterValue);

//   const headerColumns = React.useMemo(() => {
//     if (visibleColumns === "all") return columns;

//     return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
//   }, [visibleColumns]);

//   const filteredItems = React.useMemo(() => {
//     let filteredProperty = [...properties];

//     if (hasSearchFilter) {
//       filteredProperty = filteredProperty.filter((property) =>
//         property.id.toString().includes(filterValue)||
//         property.title.toLowerCase().includes(filterValue.toLowerCase())||
//         property.email.toLowerCase().includes(filterValue.toLowerCase())||
//         property.type.toLowerCase().includes(filterValue.toLowerCase())
//       );
//     }

//     return filteredProperty;
//   }, [properties, filterValue]);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return filteredItems.slice(start, end);
//   }, [page, filteredItems, rowsPerPage]);

//   const sortedItems = React.useMemo(() => {
//     return [...items].sort((a, b) => {
//       const first = a[sortDescriptor.column];
//       const second = b[sortDescriptor.column];
//       const cmp = first < second ? -1 : first > second ? 1 : 0;

//       return sortDescriptor.direction === "descending" ? -cmp : cmp;
//     });
//   }, [sortDescriptor, items]);

//   const renderCell = React.useCallback((property, columnKey) => {
//     const cellValue = property[columnKey];

//     switch (columnKey) {
//       case "title":
//         return (
//             <div className="flex ">

// <div className="bg-red-200 p-2 w-[200px]">
//    <Image
//           alt="Card"
//           className="object-cover rounded-xl"
//           src={property.property}
//           width={200}

//         />
// </div>
// <div className="flex items-center justify-center   ">
// <p className="text-bold text-3xl text-center  ">{property.title}</p>
// </div>
// </div> );
//       case "type":
//         return (
//           <div className="flex flex-col">

//             <p className="text-bold text-small capitalize">{property.user}</p>
//             <p className="text-bold text-tiny capitalize text-default-500">{cellValue}</p>
//             <p className="text-bold text-tiny capitalize text-default-500">{property.email}</p>
//             <p className="text-bold text-tiny capitalize text-default-500">{property.userName}</p>
//           </div>
//         );
//       case "actions":
//         return (
//           <div className="relative flex justify-end items-center gap-2">
//             <EditButton/>
//             <DeleteButton/>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   const onRowsPerPageChange = React.useCallback((e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   }, []);

//   const onSearchChange = React.useCallback((value) => {
//     if (value) {
//       setFilterValue(value);
//       setPage(1);
//     } else {
//       setFilterValue("");
//     }
//   }, []);

//   const topContent = React.useMemo(() => {
//     return (
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between gap-3 items-end">
//           <Input
//             isClearable
//             classNames={{
//               base: "w-full sm:max-w-[44%]",
//               inputWrapper: "border-1",
//             }}
//             placeholder="Search by 'Id' , 'Title' , 'Email' , 'Type'..."
//             size="sm"
//             startContent={<SearchIcon className="text-default-300" />}
//             value={filterValue}
//             variant="bordered"
//             onClear={() => setFilterValue("")}
//             onValueChange={onSearchChange}
//           />
//           <div className="flex gap-3">
//             <Dropdown>
//               <DropdownTrigger className="sm:flex">
//                 <Button
//                   endContent={<ChevronDownIcon className="text-small" />}
//                   size="sm"
//                   variant="flat"
//                 >
//                   Columns
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 disallowEmptySelection
//                 aria-label="Table Columns"
//                 closeOnSelect={false}
//                 selectedKeys={visibleColumns}
//                 selectionMode="multiple"
//                 onSelectionChange={setVisibleColumns}
//               >
//                 {columns.map((column) => (
//                   <DropdownItem key={column.uid} className="capitalize">
//                     {capitalize(column.name)}
//                   </DropdownItem>
//                 ))}
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         </div>
//         <div className="flex justify-between items-center " >
//           <label className="flex items-center text-default-400 text-small">
//             Rows per page:
//             <select
//               className="bg-transparent outline-none text-default-400 text-small"
//               onChange={onRowsPerPageChange}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     );
//   }, [
//     filterValue,
//     visibleColumns,
//     onSearchChange,
//     onRowsPerPageChange,
//     properties.length,
//     hasSearchFilter,
//   ]);

//   const bottomContent = React.useMemo(() => {
//     return (
//       <div className="py-2 px-2 flex justify-between items-center">
//         <Pagination
//           showControls
//           classNames={{
//             cursor: "bg-foreground text-background",
//           }}
//           color="default"
//           isDisabled={hasSearchFilter}
//           page={page}
//           total={pages}
//           variant="light"
//           onChange={setPage}
//         />
//         <span className="text-small text-default-400">
//           {selectedKeys === "all"
//             ? "All items selected"
//             : `${selectedKeys.size} of ${items.length} selected`}
//         </span>
//       </div>
//     );
//   }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

//   const classNames = React.useMemo(
//     () => ({
//       wrapper: ["max-h-[382px]", "max-w-3xl"],
//       th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
//       td: [
//         // changing the rows border radius
//         // first
//         "group-data-[first=true]:first:before:rounded-none",
//         "group-data-[first=true]:last:before:rounded-none",
//         // middle
//         "group-data-[middle=true]:before:rounded-none",
//         // last
//         "group-data-[last=true]:first:before:rounded-none",
//         "group-data-[last=true]:last:before:rounded-none",
//       ],
//     }),
//     [],
//   );

//   return (
//     <Table
//       isCompact
//       removeWrapper
//       aria-label="Example table with custom cells, pagination and sorting"
//       bottomContent={bottomContent}
//       bottomContentPlacement="outside"
//       checkboxesProps={{
//         classNames: {
//           wrapper: " hidden",
//         },
//       }}
//       classNames={classNames}
//       selectedKeys={selectedKeys}
//       selectionMode="multiple"
//       sortDescriptor={sortDescriptor}
//       topContent={topContent}
//       topContentPlacement="outside"
//       onSelectionChange={setSelectedKeys}
//       onSortChange={setSortDescriptor}
//     >
//       <TableHeader columns={headerColumns}>
//         {(column) => (
//           <TableColumn
//             key={column.uid}
//             align={column.uid === "actions" ? "center" : "start"}
//             allowsSorting={column.sortable}
//           >
//             {column.name}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody emptyContent={"No properties found"} items={sortedItems}>
//         {(item) => (
//           <TableRow key={item.id}>
//             {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
