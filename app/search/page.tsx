"use client";
import Search from "@/components/Search";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const page = () => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${queryParam}`
        );
        const data = await res.json();
        setData(data.products);
      } catch (error) {
        throw new Error("failed to fetch products");
      }
    };
    getProducts();
  }, [queryParam]);

  return (
    <div>
      <Search placeholder="search..." />
      <Table striped variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>brand</th>
            <th>price $</th>
            <th>sku</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user: any, index: number) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.brand}</td>
                <td>{user.price}$</td>
                <td>{user.sku}</td>
                <td>{user.category}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default page;
