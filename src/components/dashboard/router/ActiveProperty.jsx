import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import {
  fetchActiveProperty,
  deleteActiveProperty,
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
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
const columns = [
  { name: "Image", uid: "thumbnail" },
  { name: "Title", uid: "title" },
  { name: "Details", uid: "details" },
  { name: "Address", uid: "address" },
  { name: "ACTIONS & User Info", uid: "actions" },
];
export default function ActiveProperty() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [property, setProperty] = useState([]);
  const [refreshProperty, setRefreshProperty] = useState(false);
  const [propertyLength, setPropertyLength] = useState(0);
  const [propertyLengthAPI, setPropertyLengthAPI] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterValue, setFilterValue] = useState("");
  const userInfo = useSelector((state) => state.GlobalState.userData);

  useEffect(() => {
    fetchAllProperties(startDate, endDate);
  }, [page, rowsPerPage, refreshProperty]);
  const fetchAllProperties = async (startDate, endDate) => {
    try {
      const formattedStartDate = startDate
        ? format(startDate, "yyyy-MM-dd")
        : null;
      const formattedEndDate = endDate ? format(endDate, "yyyy-MM-dd") : null;

      const getProperties = await fetchActiveProperty(
        rowsPerPage,
        page,
        filterValue,
        formattedStartDate,
        formattedEndDate
      );
      setProperty(getProperties.Property);
      setPropertyLength(getProperties.resultCount);
      setPropertyLengthAPI(getProperties.resultCount);
    } catch (error) {
      console.error("Error fetching Properties:", error);
      setPropertyLength(0);
      setProperty([]);
    }
  };
  const handleDeleteProperty = async (propertyId) => {
    try {
      await deleteActiveProperty(propertyId);
      setRefreshProperty(!refreshProperty);
      await fetchAllProperties(startDate, endDate);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const [sortDescriptor, setSortDescriptor] = useState({});

  const pages = Math.ceil(propertyLength / rowsPerPage);
  const hasSearchFilter = Boolean(pages <= 1);
  const headerColumns = useMemo(() => {
    return columns.filter((column) => column.uid);
  });

  const filteredItems = useMemo(() => {
    let filteredUsers = [...property];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (blog) =>
          blog.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          // blog.area.toLowerCase().includes(filterValue.toLowerCase()) ||
          // blog.bathRooms.toLowerCase().includes(filterValue.toLowerCase()) ||
          // blog.price.toLowerCase().includes(filterValue.toLowerCase()) ||
          // blog.rooms.toLowerCase().includes(filterValue.toLowerCase()) ||
          blog.offer.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [property, filterValue]);
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
  const router = useRouter();
  const renderCell = useCallback((blog, columnKey) => {
    switch (columnKey) {
      case "address":
        return (
          <div className="flex flex-col w-[300px]  ">
            <p className="text-bold grid grid-cols-2 text-medium capitalize">
              <b>Address:</b>
              {blog.address.name}
            </p>
            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Governorate</b>
              {blog.address.governrate}
            </p>
            <hr />
            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Region</b>
              {blog.address.region}
            </p>
          </div>
        );

      case "details":
        const formattedUpdatedAtDate = new Date(
          blog.updatedAt
        ).toLocaleString();
        const formattedCreatedAtDate = new Date(
          blog.createdAt
        ).toLocaleString();
        return (
          <div className="flex flex-col w-[350px]">
            <p className="text-bold grid grid-cols-2 text-medium capitalize">
              <b>Offer:</b>
              {blog.offer}
            </p>
            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Price</b>
              {blog.price}
            </p>
            <hr />
            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>BathRooms</b>
              {blog.bathRooms}
            </p>
            <hr />
            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Bedrooms:</b>
              {blog.rooms}
            </p>
            <hr />

            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Area:</b>
              {blog.area}
            </p>
            <hr />

            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Created</b>
              {formattedCreatedAtDate}
            </p>
            <hr />

            <p className="text-bold  capitalize grid grid-cols-2 text-medium">
              <b>Updated</b>
              {formattedUpdatedAtDate}
            </p>
          </div>
        );

      case "thumbnail":
        return (
          <div className="flex flex-col w-[200px]">
            <Link href={`/dashboard/property-details/${blog.slug}`}>
              <Image
                width={200}
                // height={2000}
                src={blog.thumbnail}
                fallbackSrc="https://via.placeholder.com/2  00x200"
                alt="NextUI Image with fallback"
              />
            </Link>
          </div>
        );
      case "title":
        return (
          <div className="flex flex-col w-[250px]">
            <Link href={`/dashboard/property-details/${blog.slug}`}>
              <p className="font-bold text-medium text-center">{blog.title}</p>
            </Link>
          </div>
        );
      case "actions":
        return (
          <div className="relative  flex justify-start items-center w-[350px] gap-2">
            <div className="">
              <p className="text-bold grid grid-cols-2 text-medium capitalize">
                <b>ID:</b>
                {blog?._id}
              </p>
              <hr />

              <p className="text-bold  capitalize grid grid-cols-2 text-medium">
                <b>Name</b>
                {blog.user[0]?.fullname}
              </p>
              <hr />
              <p className="text-bold  capitalize grid grid-cols-2 text-medium">
                <b>User name</b>
                {blog.user[0]?.username}
              </p>
            </div>
            <Dropdown
              aria-label="Options Menu Accept Property"
              // aria-labelledbyl="Options Menu Property"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger
                aria-label="Open Options Menu"
                // aria-labelledbyl="Options Menu Property"
              >
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Accept Property Options Menu"
                // aria-labelledbyl="Options Menu Property"
              >
                {userInfo && userInfo.supAdmin ? (
                  ""
                ) : (
                  <DropdownItem
                    textValue="Delete Property"
                    onClick={() => handleDeleteProperty(blog._id)}
                  >
                    Delete
                  </DropdownItem>
                )}
                <DropdownItem
                  textValue="Accept Property"
                  onClick={() => {
                    router.push(`/property-details/${blog.slug}`);
                  }}
                >
                  Visit
                </DropdownItem>
                <DropdownItem
                  textValue="edit Property"
                  // onClick={async () => await acceptProperties(blog._id)}
                  onClick={() => {
                    router.push(`/editproperty/${blog.slug}`);
                  }}
                >
                  {/* <Link href={`/editproperty/${blog.slug}`} className="w-full h-full"> */}
                  edit
                  {/* </Link> */}
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
        <div className="flex  gap-3 items-center justify-center">
          <div className=" w-8/12 mt-5 p-5 bg-lightGreen rounded-xl">
            <form
              className="flex items-center  gap-x-2"
              onSubmit={(e) => {
                e.preventDefault(); // Prevents the default form submission behavior
                fetchAllProperties(startDate, endDate); // Call your search function
              }}
            >
              <Input
                isClearable
                className="w-full bg-white rounded-lg"
                name="search"
                placeholder="phone, email ,full name,type Of User..."
                label="Search For All Users"
                size="sm"
                startContent={<SearchIcon className="text-default-300" />}
                value={filterValue}
                variant="bordered"
                onClear={() => setFilterValue("")}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Button color="primary" type="submit">
                Search
              </Button>
            </form>
            <div className=" flex flex-wrap mt-3">
              <div className="flex  mx-2 items-center">
                <label className="font-semibold  text-white mx-1">From:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select start date"
                  className="w-full border-1 rounded-lg indent-2 h-9"
                />
              </div>
              <div className="flex  mx-2 items-center">
                <label className="font-semibold  text-white mx-1">End:</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select end date"
                  className="w-full border-1 rounded-lg indent-2 h-9"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total property Active:
            <b className="text-lightOrange">{propertyLengthAPI}</b>
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
    startDate,
    endDate,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2  flex justify-between items-center">
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
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter, selectedKeys]);

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
          wrapper: "after:bg-foreground  after:text-background text-background",
        },
      }}
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      selectedKeys={selectedKeys}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="center"
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
