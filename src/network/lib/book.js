import axiosClient from "../apiClient";

export function getBooks() {
  console.log("get books called")
  return axiosClient.get("/books");
}

//GET REQUEST WITB PARAMS
export function getBooksByAuthor(type) {
  const config = {
    params: {
      type: type,
    },
  };
  return axiosClient.get("/books", config);
}

//POST REQUST WITH BODY
export function addBooks(data) {
  return axiosClient.post("/orders", data);
}
