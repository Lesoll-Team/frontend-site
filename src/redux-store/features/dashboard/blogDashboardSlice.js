import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { addBlogs,getAllBlogs,deleteOneBlog, updateBlog } from "@/utils/dashboardApi/blogDashboardAPI";
const initialState = {
    blogInfo:null,
    blogsData:null,
    blogSending:false,
    errorBlog:null,
    blogDelete:null,
    messageEventBlog:false,
  };

  export const createBlogs = createAsyncThunk(
    "BlogDashboard/addBlogs",
    async (data) => {
      const response = await addBlogs(data.blogData);
      return response; // Assuming your API returns user data upon successful signup
    }
  );
  export const editBlog = createAsyncThunk(
    "BlogDashboard/updateBlog",
    async (data) => {
      const response = await updateBlog(data.blogData,data.blogID);
      return response; // Assuming your API returns user data upon successful signup
    }
  );

  export const getBlogs = createAsyncThunk(
    "BlogDashboard/getAllBlogs",
    async () => {
      const response = await getAllBlogs();
      return response; // Assuming your API returns user data upon successful signup
    }
  );

  export const deleteBlog = createAsyncThunk(
    "BlogDashboard/deleteOneBlog",
    async (blogID) => {
      const response = await deleteOneBlog(blogID);
      return response;
    }
  );

  const blogDashboardSlice=createSlice({
    name:"BlogDashboard",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder 

        .addCase(createBlogs.pending, (state) => {
            state.blogSending=true
          })
          .addCase(createBlogs.fulfilled, (state,action) => {
            state.blogSending=false
            state.blogInfo=action.payload
            state.messageEventBlog = false;

          })
          .addCase(createBlogs.rejected, (state,action) => {
            state.blogSending=false
            state.errorBlog=action.error
            state.messageEventBlog=true

          })

          .addCase(editBlog.pending, (state) => {
            state.blogSending=true
            state.errorBlog=null

          })
          .addCase(editBlog.fulfilled, (state,action) => {
            state.blogSending=false
            state.blogInfo=action.payload
            state.errorBlog=null
          })
          .addCase(editBlog.rejected, (state,action) => {
            state.blogSending=false
            state.errorBlog=action.error

          })


          .addCase(getBlogs.pending, (state) => {
            state.blogSending=true
          })
          .addCase(getBlogs.fulfilled, (state,action) => {
            state.blogSending=false
            state.blogsData=action.payload
          })
          .addCase(getBlogs.rejected, (state,action) => {
            state.blogSending=false
            state.errorBlog=action.error
          })


          .addCase(deleteBlog.pending, (state) => {
            state.blogSending=true
          })
          .addCase(deleteBlog.fulfilled, (state,action) => {
            state.blogSending=false
            state.blogDelete=action.payload
          })
          .addCase(deleteBlog.rejected, (state,action) => {
            state.blogSending=false
            state.errorBlog=action.error
          })
    }
  })
  export default blogDashboardSlice.reducer;