import { NavLink, Outlet } from "react-router-dom";

export const ProfileView = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-[#6bff01]" : "";
            }}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      {/* Child route */}
      <Outlet />
    </div>
  );
};
