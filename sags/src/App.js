import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserName } from "./LoginPage/UserName";
import { Password } from "./LoginPage/Password";
import { Recovery } from "./LoginPage/Recovery";
import { Reset } from "./LoginPage/Reset";
import { Register } from "./LoginPage/Register";
import { Profile } from "./LoginPage/Profile";
import { Authentication, PasswordProtecter } from "./LoginPage/middleware/Auth";
import { Home } from "./HomePage/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Table } from "./Components/Table/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />,
  },
  {
    path: "/password",
    element: (
      <PasswordProtecter>
        <Password />
      </PasswordProtecter>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: (
      <Authentication>
        <Profile />
      </Authentication>
    ),
  },
  {
    path: "/table",
    element: <Table />,
  },
]);
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
