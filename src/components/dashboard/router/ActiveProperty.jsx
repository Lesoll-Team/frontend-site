import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button, Image } from "@nextui-org/react";
// import { useRouter } from "next/router";
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
import { SearchIcon } from "../icon/SearchIcon";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { DropdownAction, ItemDropdown } from "../model/DropdownAction";
import { propertyIsSold } from "@/utils/propertyAPI";
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

    const handleSoldOutProperty = async (propertyId) => {
      try {
        await propertyIsSold({propertyId});
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
  // const router = useRouter();

  const renderCell = useCallback((blog, columnKey) => {
    switch (columnKey) {
      case "address":
        return (
          <div className="  min-w-[200px] max-w-[250px] flex flex-col ">
            <p className="text-bold text-medium flex justify-between">
              <b>Governorate :</b>
              {blog.address.governrate}
            </p>
            <hr />

            <p className="text-bold text-medium flex justify-between">
              <b>Region :</b>
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
          <div className=" flex flex-col  min-w-[250px] max-w-[300px]">
            <div className="text-bold flex gap-x-3 text-medium capitalize">
              <div className="">
                <b>Created : </b>
                {formattedCreatedAtDate}
              </div>
            </div>
            <hr />

            <div className="text-bold flex gap-x-3 text-medium capitalize">
              <div className="">
                <b>Updated :</b>
                {formattedUpdatedAtDate}
              </div>
            </div>

            <div className="text-bold flex gap-x-3 text-medium capitalize">
              <div className="">
                <b>Status: </b>
                {blog?.isSold ? <b className="text-red-500">Out Sold</b> : <b className="text-success-500"> available</b>}
              </div>
            </div>
          </div>
        );
      case "thumbnail":
        return (
          <div className=" flex min-w-[150px] max-w-[200px]">
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
          <div className="min-w-[250px]">
            <Link href={`/dashboard/property-details/${blog.slug}`}>
              <p className="font-bold text-medium text-center">{blog.title}</p>
            </Link>
          </div>
        );
      case "actions":
        return (
          <div className="flex min-w-[250px] max-w-[300px]">
            <div className="w-full  ">
              <p className="text-bold line-clamp-1   text-medium ">
                <b>Name:</b>
                {blog.user[0]?.fullname || "Empty"}
              </p>
              <hr />
              <div className="text-bold text-medium">
                <b>Phone: </b>
                <span>{blog.user[0]?.phone || "Empty"}</span>
              </div>
            </div>
            <div className="mx-5">
              <DropdownAction>
                <ItemDropdown
                  label={"Visit"}
                  href={`/property-details/${blog.slug}`}
                  action={null}
                />
                <ItemDropdown
                  label={"Edit"}
                  href={`/editproperty/${blog.slug}`}
                  action={null}
                  id={blog._id}
                />
                {userInfo && !userInfo.isAdmin ? (
                  <ul></ul>
                ) : (
                  <ItemDropdown
                    label={"Delete"}
                    href={null}
                    action={() => handleDeleteProperty(blog._id)}
                    title="تأكيد مسح العقار "
                    description="  تأكيد مسح العقار  الى الارشيف "
                  />
                )}

                {userInfo && !userInfo.isAdmin ? (
                  <ul></ul>
                ) : (
                  <ItemDropdown
                    label={blog?.isSold ? "Sold In ?" : "Sold Out ?"}
                    href={null}
                    action={() => handleSoldOutProperty(blog._id)}
                    title="تأكيد ان هذا العقار قد تم بيعة "
                    description="  تأكيد بيع العقار  الى الارشيف "
                  />
                )}
              </DropdownAction>
            </div>
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
          <div className=" w-full md:w-8/12  mt-5 p-5 bg-lightGreen rounded-xl">
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
            <div className=" flex justify-center flex-wrap mt-3">
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
        <div className="flex justify-center">
          <div className="flex w-full md:w-8/12 justify-between">
            <span className="text-default-400 text-small">
              Total property Active:
              <b className="text-lightOrange mx-2">{propertyLengthAPI}</b>
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
    handleDeleteProperty,
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
