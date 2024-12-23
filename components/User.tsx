import { getTodosById, getUserById } from "@/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const User = async ({ slug }: { slug: string[] }) => {
  const userId = slug[0];
  const todoId = slug[2];

  const { user, error } = await getUserById(userId);
  if (!user || error) {
    notFound();
  }

  const { todos } = await getTodosById(userId);
  const todo = todos?.find((todo) => todo.id === todoId);

  return (
    <section className="grow">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row">
          <ul className="flex list-disc flex-col gap-1 p-8 text-sm">
            <h3 className="mb-3 border-b pb-3 text-lg font-semibold">Todos</h3>
            {todos?.map((todo) => (
              <li key={todo.id} className="list-item list-inside">
                <Link
                  href={`/users/${userId}/todos/${todo.id}`}
                  className={`${
                    todo.id === todoId &&
                    "underline decoration-sky-500 underline-offset-4"
                  }`}
                >
                  {todo.title}
                </Link>
              </li>
            ))}
          </ul>
          {todo && (
            <div className="grow rounded-lg p-8 shadow dark:shadow-gray-700">
              <h3 className="mb-3 border-b pb-3 text-lg font-semibold">
                Details
              </h3>
              <div className="mt-4 flex items-start justify-between text-sm">
                <div>
                  <h4 className="">{todo.title}</h4>
                  <p className="text-sm text-gray-500">{todo.createdAt}</p>
                </div>
                <p
                  className={`text-sm ${
                    todo.isCompleted ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {todo.isCompleted ? "Completed" : "Not completed"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default User;
