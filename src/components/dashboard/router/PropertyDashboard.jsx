import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Button, Image } from "@nextui-org/react";
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
import Link from "next/link";
const columns = [
  { name: "Image", uid: "thumbnail" },
  { name: "Title", uid: "title" },
  { name: "Details", uid: "details" },
  { name: "Address", uid: "address" },
  { name: "ACTIONS & User Info", uid: "actions" },
];
export default function PropertyDashboard() {
  const [property, setProperty] = useState([]);

  const [refreshProperty, setRefreshProperty] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor] = useState({});
  const [page, setPage] = useState(1);
  const pages = Math.ceil(property.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);
  useEffect(() => {
    fetchAllProperties();
  }, [page, rowsPerPage, refreshProperty]);

    const fetchAllProperties = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const getProperties = await fetchAllProperty(userToken);
        setProperty(getProperties);
        setProperty(getProperties);
      } catch (error) {
        console.error("Error fetching Properties in Dashboard:", error);
      }
    };
  const handleAcceptProperty = async (propertyId) => {
    try {

    await acceptProperties(propertyId)
    setRefreshProperty(!refreshProperty);
    await fetchAllProperties();
  } catch (error) {
    console.error("Error deleting property:", error);
  }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {

    await deleteProperties(propertyId)
    setRefreshProperty(!refreshProperty);
    await fetchAllProperties();
  } catch (error) {
    console.error("Error deleting property:", error);
  }
  };


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
      case "address":
        return (
          <div className="flex flex-col w-[300px]">
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
            <Image
              width={200}
              // height={2000}
              src={blog.thumbnail}
              fallbackSrc="https://via.placeholder.com/2  00x200"
              alt="NextUI Image with fallback"
            />
          </div>
        );
      case "title":
        return (
          <div className="flex flex-col w-[250px]">
            <p className="font-bold text-medium text-center">{blog.title}</p>
          </div>
        );
        case "actions":
          return (
            <div className="relative flex justify-start items-center w-[350px] gap-2">
              <div className="">
              <hr />
              <p className="text-bold grid grid-cols-2 text-medium capitalize">
                <b>ID:</b>
                {blog._id}
              </p>
              <hr />
              <p className="text-bold  capitalize grid grid-cols-2 text-medium">
                <b>Email</b>
                {blog.user.email}
              </p>
              <hr />
              <p className="text-bold  capitalize grid grid-cols-2 text-medium">
                <b>Name</b>
                {blog.user.fullname}
              </p>
              <hr />
              <p className="text-bold  capitalize grid grid-cols-2 text-medium">
                <b>Phone</b>
                {blog.user.phone
}
              </p>
              <hr />

              </div>
              <Dropdown
                aria-label="Options Menu Property"
                aria-labelledbyl="Options Menu Property"
                className="bg-background border-1 border-default-200"
              >
                <DropdownTrigger
                  aria-label="Options Menu Property"
                  aria-labelledbyl="Options Menu Property"
                >
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Options Menu Property"
                  aria-labelledbyl="Options Menu Property"
                >
                  <DropdownItem
                    textValue="Delete Property"
                    onClick={() => handleDeleteProperty(blog._id)}
                  >
                    Delete
                  </DropdownItem>
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
            Total property pending:{" "}
            <b className="text-lightOrange"> {property.length}</b>
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
