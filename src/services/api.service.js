import Vue from "vue";
import JwtService from "@/services/jwt.service"

const ApiService = {
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[FEAJ] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[FEAJ] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[FEAJ] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ProductsService = {
  query(type, params) {
    return ApiService.query("products", {
      params
    });
  },
  get(id) {
    return ApiService.get("products", id);
  },
  create(params) {
    return ApiService.post("products", params);
  },
  update(id, params) {
    return ApiService.update("products", id, params);
  },
  delete(id) {
    return ApiService.delete(`products/${id}`);
  }
};