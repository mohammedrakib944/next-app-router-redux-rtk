"use client";
import { useGetUsersQuery } from "@/redux/features/api/userSlice";
import Link from "next/link";

export default function Home() {
  const { isLoading, data, isError } = useGetUsersQuery(null);

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>There is an error Fetching data!</span>;

  return (
    <main>
      <h2>Home Page</h2>
      <br />

      <div>
        <h2>Album </h2>
        <div className="grid grid-cols-3 gap-3">
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <Link className="cursor-pointer" href={`/${item.id}`}>
                  <img src={item.url} alt={item.title} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
