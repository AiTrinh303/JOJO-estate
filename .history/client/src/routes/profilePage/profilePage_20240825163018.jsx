import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  // const data = useLoaderData();

  // const { updateUser, currentUser } = useContext(AuthContext);

  // const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
<div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
    // <div className="profilePage">
    //   <div className="details">
    //     <div className="wrapper">
    //       <div className="title">
    //         <h1>User Information</h1>
    //         <Link to="/profile/update">
    //           <button>Update Profile</button>
    //         </Link>
    //       </div>
    //       <div className="info">
    //         <span>
    //           Avatar:
    //           <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
    //         </span>
    //         <span>
    //           Username: <b>{currentUser.username}</b>
    //         </span>
    //         <span>
    //           E-mail: <b>{currentUser.email}</b>
    //         </span>
    //         <button onClick={handleLogout}>Logout</button>
    //       </div>
    //       <div className="title">
    //         <h1>My List</h1>
    //         <Link to="/add">
    //           <button>Create New Post</button>
    //         </Link>
    //       </div>
    //       <Suspense fallback={<p>Loading...</p>}>
    //         <Await
    //           resolve={data.postResponse}
    //           errorElement={<p>Error loading posts!</p>}
    //         >
    //           {(postResponse) => <List posts={postResponse.data.userPosts} />}
    //         </Await>
    //       </Suspense>
    //       <div className="title">
    //         <h1>Saved List</h1>
    //       </div>
    //       <Suspense fallback={<p>Loading...</p>}>
    //         <Await
    //           resolve={data.postResponse}
    //           errorElement={<p>Error loading posts!</p>}
    //         >
    //           {(postResponse) => <List posts={postResponse.data.savedPosts} />}
    //         </Await>
    //       </Suspense>
    //     </div>
    //   </div>
    //   <div className="chatContainer">
    //     <div className="wrapper">
    //       <Suspense fallback={<p>Loading...</p>}>
    //         <Await
    //           resolve={data.chatResponse}
    //           errorElement={<p>Error loading chats!</p>}
    //         >
    //           {(chatResponse) => <Chat chats={chatResponse.data}/>}
    //         </Await>
    //       </Suspense>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProfilePage;
