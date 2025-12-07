//Santisation-basically forces users to configure this from an external config file
//Added custom nav hook so now we can export this, and use it elsewhere
import { useNavigate } from "react-router-dom";
import { nav_config } from "../nav-consts";
import { useContext } from "react";
import { AuthContext } from "@api/AuthContext.jsx";
import { useEffect } from "react";

const nav_items = new Map(nav_config.map((item) => [item.name, item]));
export const useNavigateTo = (page) => {
  const navigate = useNavigate();
  const isLoggedIn = useContext(AuthContext);

  const goTo = () => {
    let nav_route = `/${page}`;
    const item = nav_items.get(page);
    if (!item || (!isLoggedIn && nav_items.authReq == true)) {
      console.log("invalid route: " + nav_route);
      nav_route = "/error";
    }
    navigate(nav_route);
  };

  return { goTo };
};
