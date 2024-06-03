import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { authRoutes } from "./routes";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {authRoutes.map((el) =>
        el?.children.length > 0 ? (
          <Route path={el.path} element={el.element} key={el.path}>
            {el?.children?.map((child) => (
              <Route
                path={child.path}
                element={child.element}
                index={child.index}
                key={child.path}
              />
            ))}
          </Route>
        ) : (
          <Route element={el.element} path={el.path} />
        )
      )}

      <Route path="*" element={<NotFound />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
