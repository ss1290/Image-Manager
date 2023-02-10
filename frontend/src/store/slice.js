import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const slice = createSlice({
  name: "Image",
  initialState: {
    loading: false,
    images: [],
    image: {},
    imagesCount: 0,
    resultPerPage: 0,
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    fireRequest: (state, action) => {
      state.loading = true;
    },
    uploadSuccess: (state, action) => {
      state.loading = false;
    },
    listImageSuccess: (state, action) => {
      state.loading = false;
      state.images = action.payload.images;
      state.imagesCount = action.payload.imagesCount;
      state.resultPerPage = action.payload.resultPerPage;
    },
    fetchImage: (state, action) => {
      state.image = action.payload;
      state.loading = false;
    },
    fireUserRequest: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    userRequestSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});
export default slice.reducer;

const {
  fireRequest,
  uploadSuccess,
  listImageSuccess,
  fetchImage,
  fireUserRequest,
  userRequestSuccess,
} = slice.actions;

export const uploadImage = (imageData) => async (dispatch) => {
  try {
    dispatch(fireRequest());
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    await axios.post(`/upload`, imageData, config);
    dispatch(uploadSuccess());
  } catch (error) {
    dispatch(uploadSuccess());
  }
};

export const listImage = (page) => async (dispatch) => {
  try {
    dispatch(fireRequest());
    const { data } = await axios.get(`/images?page=${page}`);
    dispatch(listImageSuccess(data));
  } catch (error) {
    dispatch(uploadSuccess());
  }
};

export const updateCount = (id) => async (dispatch) => {
  try {
    dispatch(fireRequest());
    await axios.patch(`/image/${id}`, {});
    let { data } = await axios.get(`/image/${id}`);
    dispatch(fetchImage(data));
  } catch (error) {
    console.log(error);
    dispatch(uploadSuccess());
  }
};
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(fireUserRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    let { data } = await axios.post(`/login`, userData, config);
    console.log(data);
    dispatch(userRequestSuccess(data.user));
  } catch (error) {
    dispatch(uploadSuccess());
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(fireUserRequest());
    let { data } = await axios.get(`/me`);
    dispatch(userRequestSuccess(data.user));
  } catch (error) {
    dispatch(uploadSuccess());
  }
};
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(fireUserRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    let { data } = await axios.post(`/signup`, userData, config);
    dispatch(userRequestSuccess(data.user));
  } catch (error) {
    dispatch(uploadSuccess());
  }
};
