import React, { useEffect, useState } from "react";
import { Suggestion } from "./suggestion";

export const SearchBox = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setsearchParam] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  const [showdrop, setShowdrop] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setsearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdata(filteredData);
      setShowdrop(true);
    } else {
      setShowdrop(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((usersItem) => usersItem.firstName));
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filterdata);
  return (
    <div>
      {loading ? (
        <h2>loading...data ,Please wait...!!!</h2>
      ) : (
        <input
          name="seach-box"
          onChange={handleChange}
          value={searchParam}
          placeholder="Search the user here..."
        />
      )}

      {showdrop && <Suggestion data={filterdata} />}
    </div>
  );
};
