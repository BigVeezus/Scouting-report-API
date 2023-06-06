## OFF-Set Based and Cursor-based Paginations and when to use them.

## OFF-set Based Pagination

`GET /products?limit=50&offset=100`
Gets products in the database starting from "101-150"

**Pros**

1. Simple to implement for client and server
2. Possible to jump to pages

**Cons**

1. Unreliable results
2. Inefficient for very large databases.

## Cursor-based Pagination

Uses only limit in requests
`GET /products?limit=50`

Server responds with results and a next-cursor and includes cursor in subsequent requests
`GET /products?limit=50&nextCursor=12345`

**Pros**

1. Improved performance
2. Consistent Results

**Cons**

1. Clients need to traverse through each page.
2. Records might be added to the page at random positions (Less likely)
3. Clients need to manage next cursor.
