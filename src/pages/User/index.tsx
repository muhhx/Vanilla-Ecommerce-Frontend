import useLogout from "../../hooks/useLogout";

export default function User() {
  const [status, error, handleLogout] = useLogout();

  return (
    <div>
      <span>
        {error} | {status}
      </span>
      <button onClick={handleLogout}>Fazer Logout</button>
    </div>
  );
}
