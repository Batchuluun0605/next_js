"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "react-bootstrap";

const PaginationControl = ({
  totalPage,
  per_page,
}: {
  totalPage: number;
  per_page: string | string[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") ?? "1";

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          router.push(
            `/pagination?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
      />
      <Pagination.Ellipsis />
      <div>
        {Array.from({ length: totalPage / Number(per_page) }, (_, index) => (
          <Link
            key={index}
            href={`/pagination?page=${Number(index + 1)}&per_page=${per_page}`}
          >
            <button
              style={{
                backgroundColor: Number(page) === index + 1 ? "blue" : "gray",
                color: "white",
                padding: "5px 10px",
                margin: "0 5px",
              }}
            >
              {index + 1}
            </button>
          </Link>
        ))}
      </div>
      <Pagination.Next
        onClick={() => {
          router.push(
            `/pagination?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
      />
    </Pagination>
  );
};

export default PaginationControl;
