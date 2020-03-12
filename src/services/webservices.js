import JSON from "@/plugins/axios";

export default {
  getHomePosts: () => JSON.get(`home`),
  getProduct1Posts: () => JSON.get(`product1`),
  getProduct2Posts: () => JSON.get(`product2`)
}