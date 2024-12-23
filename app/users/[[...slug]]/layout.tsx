import { GetUsers } from "@/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const layout = async ({
  params,
  children,
}: {
  params: { slug?: string[] };
  children: React.ReactNode;
}) => {
  const { users, error } = await GetUsers();
  if (!users || error) {
    notFound();
  }

  const userId = params?.slug?.[0];

  return (
    <section className=" py-2">
      <div className="container">
        <h1 className="text-2xl font-semibold">All Users</h1>

        <div className="mt-6 flex overflow-hidden rounded-lg shadow dark:shadow-gray-700">
          <ul className="flex flex-col gap-2 bg-gray-100 p-8 text-sm dark:bg-gray-800">
            {users?.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/users/${user.id}`}
                  className={`${
                    user.id === userId &&
                    "underline decoration-sky-500 underline-offset-4"
                  }`}
                >
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>

          {children}
        </div>
      </div>
    </section>
  );
};

export default layout;
