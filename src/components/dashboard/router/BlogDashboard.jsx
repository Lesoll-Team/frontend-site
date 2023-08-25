import React, { useEffect, useState } from "react";
import { Textarea, Input, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import AddBlogModule from '../model/blogs/AddBlogModule'
import {
  deleteBlog,
} from "@/redux-store/features/dashboard/blogDashboardSlice";
// deleteOneBlog
import { deleteOneBlog, getAllBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Image,
} from "@nextui-org/react";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SearchIcon } from "../icon/SearchIcon";
import { PlusIcon } from "../icon/PlusIcon";
import { VerticalDotsIcon } from "../icon/VerticalDotsIcon";
import { useRouter } from "next/router";

const columns = [
  { name: "Image", uid: "BlogImage" },
  { name: "ID", uid: "_id" }, //, sortable: true
  { name: "Title", uid: "title" }, //, sortable: true
  { name: "ACTIONS", uid: "actions" },
];
export default function BlogDashboard() {
  const dispatch = useDispatch();
  const router=useRouter()
  const [blogs, setBlogs] = React.useState([]);
  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const getBlogs = await getAllBlogs();
        setBlogs(getBlogs);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchBlogsData();
  }, []);
  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({});
  const [page, setPage] = React.useState(1);
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
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {blog.title.ar}
            </p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {blog.title.en}
            </p>
          </div>
        );
      case "BlogImage":
        return (
          <Image
            width={200}
            height={200}
            src={blog.BlogImage}
            fallbackSrc="https://via.placeholder.com/300x200"
            alt="NextUI Image with fallback"
          />
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                onClick={async()=> await deleteOneBlog(blog._id)}
                >Delete</DropdownItem>
                <DropdownItem onClick={() => router.push(`/blogs/${blog._id}`)}>
                View
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      case "_id":
        return (
          <div className="flex flex-col">
            <p className="text-bold  capitalize">{blog._id}</p>
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
         <AddBlogModule />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {blogs.length} blogs
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

// export default function BlogDashboard() {

//   const dispatch = useDispatch();

//   const blogSending = useSelector((state) => state.BlogDashboard.blogSending);
//   const blogsData = useSelector((state) => state.BlogDashboard.blogsData);
//   const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
//   const userInfo = useSelector((state) => state.GlobalState.userData);
//   const [userDataInfo, setUserDataInfo] = useState({});
//   const [blogID, setBlogID] = useState("");

// console.log(blogID);

//   const [page, setPage] = React.useState(1);
//   const rowsPerPage = 4;

//   const pages = Math.ceil(blogsData?blogsData.length/rowsPerPage:blogsData/ rowsPerPage);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return blogsData?blogsData.slice(start, end):blogsData;
//   }, [page, blogsData]);

//   useEffect(() => {
//     setUserDataInfo(userInfo);
//   }, [dispatch, userInfo]);

//   const [titleAR, setTitleAR] = useState("");
//   const [titleEN, setTitleEN] = useState("");

//   const [descriptionAR, setDescriptionAR] = useState("");
//   const [descriptionEN, setDescriptionEN] = useState("");

//   const [selectedImage, setImage] = useState(null);
//   const [selectedImagePrev, setImagePrev] = useState(null);

//   const handleImgChange = (e) => {
//     const newImage = e.target.files[0];
//     setImage(newImage);

//     if (newImage) {
//       if (typeof window !== "undefined") {
//         setImagePrev(window.URL.createObjectURL(newImage));
//       }
//     } else {
//       setImagePrev(null);
//     }
//   };
//   const handleDeleteImage = () => {
//     setImage(null);
//     setImagePrev(null);
//   };
//   const handleBlogButton = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const metaDescription = {
//       ar: descriptionAR,
//       en: descriptionEN,
//     };
//     const description = {
//       ar: descriptionAR,
//       en: descriptionEN,
//     };
//     const title = {
//       ar: titleAR,
//       en: titleEN,
//     };
//     //     const metaDescriptionToStr=JSON.stringify({metaDescription})
//     //     const descriptionToStr=JSON.stringify({description})
//     //     const titleToStr=JSON.stringify({title})

//     // console.log(selectedImage);
//     // console.log(metaDescriptionToStr);
//     // console.log(descriptionToStr);
//     // console.log(titleToStr);

//     formData.append("img", selectedImage);
//     formData.append("title", JSON.stringify( title ));
//     formData.append("metaDescription", JSON.stringify(metaDescription));
//     formData.append("description", JSON.stringify(description));
//     dispatch(
//       createBlogs({ userToken: userDataInfo?.token, blogData: formData }) //, blogData: formData
//     );
//   };

//   const handleDeleteBlogButton=(e)=>{
//     e.preventDefault();
//     console.log(blogID);
//     dispatch(deleteBlog(blogID))
//   }

//   return (
//     <div>
//        <Accordion selectionMode="multiple">
//             <AccordionItem key="1" aria-label="Add Blog" title="Add Blog">
//       <div className="gap-5">
//         <form onSubmit={handleBlogButton}>

//               <div className="bg-red-200">
//                 <Input
//                   type="file"
//                   placeholder="set Image here"
//                   labelPlacement="outside"
//                   label="Image"
//                   className="my-5"
//                   onChange={handleImgChange}
//                 />
//               </div>
//               <div>
//                 {/* {selectedImagePrev&& */}
//                 <img src={selectedImagePrev} />
//                 <button
//                   type="button"
//                   onClick={handleDeleteImage}
//                   className="ml-2 text-red-500"
//                 >
//                   Delete
//                 </button>
//                 {/* } */}
//               </div>

//               <div className=" my-5 gap-5 flex">
//                 <Input
//                   color="success"
//                   type="text"
//                   placeholder="set Title Arabic here"
//                   labelPlacement="outside"
//                   label=<b>Title Arabic</b>
//                   onChange={(e) => setTitleAR(e.target.value)}
//                 />
//                 <Input
//                   color="success"
//                   type="text"
//                   placeholder="set Title English here"
//                   labelPlacement="outside"
//                   label=<b>Title English</b>
//                   onChange={(e) => setTitleEN(e.target.value)}
//                 />
//               </div>
//               <div className=" flex gap-5">
//                 <Textarea
//                   color="success"
//                   onChange={(e) => setDescriptionAR(e.target.value)}
//                   label=<b>Description Arabic</b>
//                   labelPlacement="outside"
//                   placeholder="حقل إدخال الوصف "
//                 />
//                 <Textarea
//                   color="success"
//                   onChange={(e) => setDescriptionEN(e.target.value)}
//                   label=<b>Description English</b>
//                   labelPlacement="outside"
//                   placeholder="Enter your description"
//                 />
//               </div>

//           <Button
//             type="submit"
//             className="w-full p-10 text-2xl"
//             color="secondary"
//           >
//             <b> {blogSending ? "submitting..." : "submit"}</b>
//           </Button>
//           {errorBlog && <div>{errorBlog.message}</div>}
//         </form>
//       </div>
//       </AccordionItem>
//       <AccordionItem key="2" aria-label="Get Blogs" title="Get Blogs"
//       >
//       <div className="gap-5">
//       <Button onClick={()=>dispatch(getBlogs())}>Show</Button>

//       <Table aria-label="Example static collection table"
//           bottomContent={
//         <div className="flex w-full justify-center">
//           <Pagination
//             isCompact
//             showControls
//             showShadow
//             color="secondary"
//             page={page}
//             total={pages}
//             onChange={(page) => setPage(page)}
//           />
//         </div>
//       }>
//       <TableHeader>
//         <TableColumn key="Image">Image</TableColumn>
//         <TableColumn key="ID">ID</TableColumn>
//         <TableColumn key="Title">Title</TableColumn>
//       </TableHeader>
//       <TableBody items={items}>
//       {items?(item) => (
//           <TableRow key={item._id}>
//             <TableCell>
//             <Image
//       width={100}
//       height={100}
//       src={item.BlogImage}
//       fallbackSrc="https://via.placeholder.com/300x200"
//       alt="NextUI Image with fallback"
//     />
//             </TableCell>
//             <TableCell>{item._id}</TableCell>
//             <TableCell>{item.title.ar}</TableCell>
//           </TableRow>
//         ):null}
//       </TableBody>
//     </Table>

//  {/* <div>     {blogsData?blogsData.map((blog)=><div key={blog._id}>
//   <div>
//     <b>{blog._id}</b>
//     <b>{blog.title.ar}</b>
//   </div>
//  </div>):null}</div> */}

//       </div>
//       </AccordionItem>
//       <AccordionItem key="3" aria-label="Delete Blog" title="Delete Blog">
//       <div className="gap-5">
//         <form onSubmit={handleDeleteBlogButton}>
//        <input type="text" onChange={(e)=>setBlogID(e.target.value)} placeholder="ID Blog"/>
//           <Button
//             type="submit"
//             className="w-full p-10 text-2xl"
//             color="danger"
//           >
//             <b> {blogSending ? "Deleted..." : "Delete"}</b>
//           </Button>
//           {errorBlog && <div>{errorBlog.message}</div>}
//         </form>
//       </div>
//       </AccordionItem>

//              </Accordion>

//     </div>
//   );
// }

//<div className={`bg-red-200  ${redMore ? "" : "hidden"} `}>
//<div className="bg-gray-500">
// <img src={selectedImage} />
//{/* <div dangerouslySetInnerHTML={{ __html: blogImg }}/> */}
//</div>
//<div className="bg-blue-500">
// {/* <div dangerouslySetInnerHTML={{ __html: blogTitle }}/> */}
//<div className="font-bold text-4xl">{title}</div>
//<div className="bg-yellow-200">
//{/* <div dangerouslySetInnerHTML={{ __html: blogBody }}/> */}
//<div className="font-thin">{description}</div>
//</div>
//</div>
//</div>
