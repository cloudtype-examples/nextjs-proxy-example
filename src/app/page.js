import UsersList from "./components/UsersList";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || 'http://localhost:8080';
const apiPath = process.env.NEXT_PUBLIC_API_PATH || '/api/users'
const apiUrl = apiDomain + apiPath;

async function fetchData() {
  const res = await fetch(`${apiUrl}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function UsersPage() {
  let initialData;
  try {
    initialData = await fetchData();
  } catch (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to load: {error.message}
      </div>
    );
  }

  return <UsersList initialData={initialData} />;
}
