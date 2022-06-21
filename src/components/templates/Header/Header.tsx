import "./Header.css";
import { Container, Stack } from "@mui/material";
import logo from "assets/logo.png";
// import AuthService from "services/auth.service";
import BasicMenu from "components/atoms/BasicMenu";
import { useAppDispatch } from "redux/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  if (pathname === "/") return <></>;

  return (
    <header>
      <div className="navbar">
        <Container>
          <ul>
            <li>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <BasicMenu
                list={[
                  {
                    text: "City Management",
                    onClick: () => navigate("/city-management"),
                  },
                  {
                    text: "Zip Code Management",
                    onClick: () => navigate("/zip-code-management"),
                  },

                  {
                    text: "Home Page Banner",
                    onClick: () => navigate("/home-page-banner"),
                  },

                  {
                    text: "Faq Items",
                    onClick: () => navigate("/faq-items"),
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>
                    Content <br /> Management
                  </span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>

            <li>
              <BasicMenu
                list={[
                  {
                    text: "Role Management",
                    onClick: () => navigate("/role-management"),
                  },
                  {
                    text: "Account Management",
                    onClick: () => navigate("/account-management"),
                  },
                  {
                    text: "Accounts With Most Orders",
                    onClick: () => navigate("/accounts-with-most-orders"),
                  },
                  {
                    text: "Send Push Notification",
                    onClick: () => navigate("/send-push-notification"),
                  },
                  {
                    text: "Zip Code Requests",
                    onClick: () => navigate("/zipcode-requests"),
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>
                    Account <br /> Management
                  </span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>

            <li>
              <BasicMenu
                list={[
                  {
                    text: "Product Management",
                    onClick: () => navigate("/product-management"),
                  },
                  // {
                  //   text: "Product Stock Management",
                  //   onClick: () => navigate("/product-stock-management"),
                  // },
                  {
                    text: "Category Management",
                    onClick: () => navigate("/category-management"),
                  },
                  {
                    text: "Sub Category Management",
                    onClick: () => navigate("/subcategory-management"),
                  },
                  {
                    text: "Store Management",
                    onClick: () => navigate("/store-management"),
                  },
                  {
                    text: "Store Zip Codes",
                    onClick: () => navigate("/store-zipcodes"),
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>
                    Catalogue <br /> Management
                  </span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>
            <li>
              <BasicMenu
                list={[
                  {
                    text: "Campaigns",
                    onClick: () => navigate("/campaigns"),
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>
                    Campaign <br /> Management
                  </span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>

            <li>
              <BasicMenu
                list={[
                  {
                    text: "Active Orders",
                    onClick: () => navigate("/active-orders"),
                  },
                  {
                    text: "Orders",
                    onClick: () => navigate("/orders"),
                  },
                  {
                    text: "Failed Orders",
                    onClick: () => navigate("/failed-orders"),
                  },
                  {
                    text: "Tax Report",
                    onClick: () => navigate("/tax-report"),
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>
                    Order <br /> Management
                  </span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>
            <li>
              <BasicMenu
                list={[
                  {
                    text: "Account Referral Settings",
                    onClick: () => navigate("/account-referral-settings"),
                  },
                  {
                    text: "Account",
                  },
                ]}
                avatar={false}
                color="#ffffff"
              >
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span>Settings</span>
                  <FaAngleDown />
                </Stack>
              </BasicMenu>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
