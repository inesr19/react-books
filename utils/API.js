import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};