import { FaExchangeAlt, FaTrash, FaUserPlus } from "react-icons/fa";
import NavBar from "../../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { data } from "autoprefixer";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allUsers, setAllUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get("./../../../public/users.json").then((res) => {
      setUsers(res.data);
      setAllUsers(res.data);
    });
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (date) => {
    let filtered = allUsers.filter((user) => {
      let userData = new Date(user.added_date);

      return (
        userData >= date.selection.startDate &&
        userData <= data.selection.endDate
      );
    });

    setStartDate(date.selection.startDate);
    // console.log(date.selection.startDate);
    setEndDate(date.selection.endDate);
    console.log(date.selection.endDate);
    setUsers(filtered);
    console.log(filtered);
  };

  const hadleAdd = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add new user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add User!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          text: "User added successfully",
          icon: "success",
        });
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("./../../../public/users.json").then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col lg:flex-row items-center justify-between px-3 lg:px-10  space-y-4 lg:space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        {/* Select Tag with Value "date" */}
        <div>
          <span>Sort by Date</span>
          {"    "}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Date
          </button>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="table w-full mx-auto text-center z-20">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Added Date</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="z-10">
            {/* row 1 */}
            {users?.map((item, index) => {
              let date = new Date(item.added_date);
              return (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item?.username}</td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>
                    {item.status} <span className="text-green-700">&deg;</span>{" "}
                  </td>

                  <td>
                    {item == user?.name ? (
                      <button>
                        <FaExchangeAlt />
                      </button>
                    ) : (
                      "Unauthorized"
                    )}
                  </td>
                  <td className="text-2xl flex gap-5 justify-center">
                    <button onClick={hadleAdd}>
                      <FaUserPlus />
                    </button>
                    <button onClick={handleDelete}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Users;
