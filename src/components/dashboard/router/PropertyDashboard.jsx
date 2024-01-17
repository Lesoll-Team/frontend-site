import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Image } from "@nextui-org/react";
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
// import {
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
// } from "@nextui-org/react";
import { SearchIcon } from "../icon/SearchIcon";
// import { VerticalDotsIcon } from "../icon/VerticalDotsIcon";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { DropdownAction, ItemDropdown } from "../model/DropdownAction";
const columns = [
  { name: "Image", uid: "thumbnail" },
  { name: "Title", uid: "title" },
  { name: "Details", uid: "details" },
  { name: "Address", uid: "address" },
  { name: "ACTIONS & User Info", uid: "actions" },
];
export default function PropertyDashboard() {
  const router = useRouter();
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
  const userInfo = useSelector((state) => state.GlobalState.userData);
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
      await acceptProperties(propertyId);
      setRefreshProperty(!refreshProperty);
      await fetchAllProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      await deleteProperties(propertyId);
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
          <div className="  min-w-[250px] flex flex-col ">
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
          <div className="grid  min-w-[250px]">
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
          </div>
        );

      case "thumbnail":
        return (
          <div className="w-[200px]">
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
          <div className="min-w-[300px] max-w-[400px]">
            <p className="font-bold text-medium text-center">{blog.title}</p>
          </div>
        );
      case "actions":
        return (
          <div className="grid grid-cols-2 min-w-[450px]">
            <div className="flex flex-col">
              <p className="text-bold line-clamp-1   text-medium ">
                <b>Email:</b>
                {blog.user?.fullname || "Empty"}
              </p>
              <hr />
              <div className="text-bold text-medium">
                <b>Phone: </b>
                <span>{blog.user.phone || "Empty"}</span>
              </div>
            </div>
            <div>
              <DropdownAction>
                {userInfo && userInfo.isAdmin ? (
                  <ul></ul>
                ) : (
                  <ItemDropdown
                    label={"Accept"}
                    href={null}
                    action={() => handleAcceptProperty(blog._id)}
                    title="تأكيد تنزيل العقار "
                    description=" تأكيد تنزيل العقار "
                  />
                )}

                <ItemDropdown
                  label={"Edit"}
                  href={`/editproperty/${blog.slug}`}
                  action={null}
                  id={blog._id}
                />

                {userInfo && userInfo.isAdmin ? (
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
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            name="search"
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

/**
 *             <Dropdown
              aria-label="Options Menu Property"
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
                aria-label="Property  Options Menu"
                // aria-labelledbyl="Options Menu Property"
              >
                {userInfo && !userInfo.supAdmin && (
                  <DropdownItem
                    textValue="Delete Property"
                    onClick={() => handleDeleteProperty(blog._id)}
                  >
                    Delete
                  </DropdownItem>
                )}
                {userInfo && !userInfo.supAdmin && (
                  <DropdownItem
                    textValue="Accept Property"
                    onClick={() => handleAcceptProperty(blog._id)}
                  >
                    Accept
                  </DropdownItem>
                )}
                <DropdownItem
                  textValue="edit Property"
                  // onClick={async () => await acceptProperties(blog._id)}
                  onClick={() => {
                    router.push(`/editproperty/${blog.slug}`);
                  }}
                >
                  {/* <Link href={`/editproperty/${blog.slug}`} className="w-full h-full"> 
                  edit

                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
 */
