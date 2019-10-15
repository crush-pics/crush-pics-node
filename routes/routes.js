const routes = {
   "dashboard": [
    [
      "get",
      "GET",
      "/dashboard",
    ],
  ],
  "invoices": [
    [
      "list",
      "GET",
      "/invoices",
    ],
  ],
  "original_images": [
    [
      "compress",
      "POST",
      "/compress",
    ],
  ],
}

module.exports = routes