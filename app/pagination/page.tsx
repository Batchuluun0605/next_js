"use client";
import PaginationControl from "@/components/PaginationControl";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const page = () => {
  const searchParms = useSearchParams();
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const per_page = searchParms.get("per_page") ?? "10";
  const page = searchParms.get("page") ?? "0";
  console.log(per_page);

  let skip = 10 * Number(page);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${Number(
            per_page
          )}&skip=${skip}&select=title,price`
        );
        const data = await res.json();

        setData(data.products);
        setTotalPage(data.total);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [skip]);

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Table striped variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>price $</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user: any, index: number) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.price}$</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Suspense>

      <PaginationControl totalPage={totalPage} per_page={per_page} />
    </div>
  );
};

export default page;
