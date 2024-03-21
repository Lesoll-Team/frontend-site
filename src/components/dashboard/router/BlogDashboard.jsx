import React, { useEffect, useState } from "react";
import {
  deleteOneBlog,
  getAllBlogs,
} from "@/utils/dashboardApi/blogDashboardAPI";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../icon/VerticalDotsIcon";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import { PlusIcon } from "../icon/PlusIcon";
import { DropdownAction, ItemDropdown } from "../model/DropdownAction";
const columns = [
  { name: "Image", uid: "BlogImage" },
  // { name: "ID", uid: "_id" }, //, sortable: true
  { name: "Title", uid: "title" }, //, sortable: true
  { name: "ACTIONS", uid: "actions" },
];
export default function BlogDashboard() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const router = useRouter();
  const [blogs, setBlogs] = React.useState([]);
  const [refreshProperty, setRefreshProperty] = useState(false);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    fetchBlogsData();
  }, [refreshProperty, page, rowsPerPage]);

  const fetchBlogsData = async () => {
    try {
      const getBlogs = await getAllBlogs();
      setBlogs(getBlogs);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      await deleteOneBlog(blogId);
      setRefreshProperty(!refreshProperty);
      await fetchBlogsData();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };
  const [filterValue, setFilterValue] = React.useState("");
  const [sortDescriptor, setSortDescriptor] = React.useState({});
  const pages = Math.ceil(blogs.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);
  const headerColumns = React.useMemo(() => {
    return columns.filter((column) => column.uid);
  });

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...blogs];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (blog) =>
          blog.title.ar.toLowerCase().includes(filterValue.toLowerCase()) ||
          blog.title.en.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [blogs, filterValue]);

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

  const renderCell = React.useCallback((blog, columnKey) => {
    switch (columnKey) {
      case "title":
        return (
          <div className="hidden md:flex flex-col min-w-[200px]">
            <p className="text-bold text-tiny line-clamp-1 md:line-clamp-2 capitalize text-default-500">
              {blog.title.ar}
            </p>
          </div>
        );
      case "BlogImage":
        return (
          <Image
            width={100}
            height={100}
            src={blog.BlogImage}
            style={{ objectFit: "cover" }}
            className="min-w-[100px] w-[100px] h-[100px]"
            alt="NextUI Image with fallback"
          />
        );
      case "actions":
        return (
          <div className=" flex justify-end fixed">
            <DropdownAction iconIs={<VerticalDotsIcon />}>
              <ItemDropdown
                label={"View"}
                href={`/blog/${language ? blog.slug?.ar : blog.slug?.en}`}
                action={null}
                id={blog._id}
              />
              <ItemDropdown
                label={"Edit"}
                href={`/dashboard/blog/edit-blog/${
                  language ? blog.slug.ar : blog.slug.en
                }`}
                action={null}
                id={blog._id}
              />
              <ItemDropdown
                label={"Delete"}
                href={null}
                action={() => handleDeleteBlog(blog._id)}
                title="تأكيد مسح العقار "
                description="  تأكيد مسح العقار  الى الارشيف "
              />
            </DropdownAction>
          </div>
        );
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
        <div className="flex md:flex-row flex-col justify-between gap-3 items-end">
          <input
            type="search"
            name="search"
            className=" w-full sm:max-w-[44%] border-1 p-1 rounded-md"
            placeholder="Search by name..."
            size="sm"
            value={filterValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              className=" flex items-center border-1 border-black p-2  rounded-md "
              onClick={() => router.push("/dashboard/blog/add-blog")}
            >
              <PlusIcon />
              Add New Blog
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {blogs.length} blogs
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:{" "}
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
    blogs.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
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

  const classNames = React.useMemo(
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
      <TableBody emptyContent={"No blogs found"} items={sortedItems}>
        {(item) => (
          <TableRow className="" key={item._id}>
            {(columnKey) => (
              <TableCell className="">{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
