import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "@material-ui/core";
import cx from "classnames";

import image from "../../assets/images/corona-small.png";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faQuestionCircle,
  faShieldVirus,
  faLungsVirus
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";

const items = [
  { name: "Home", path: "/", icon: faHome, active: true },
  { name: "Graph", path: "/stat", icon: faChartBar, active: false },
  { name: "Symptoms", path: "/symptoms", icon: faLungsVirus, active: false },
  {
    name: "Prevention",
    path: "/prevention",
    icon: faShieldVirus,
    active: false
  },
  { name: "FAQ", path: "/faq", icon: faQuestionCircle, active: false }
];

// const SideNav = () => {
//   const handleClick = e => {};

//   return (
//     <div className={styles.sidenav}>
//       <img src={image} alt="Corona Virus" />
//       <div className={styles.flexList}>
//         {items.map(item => {
//           return (
//             <Link
//               to={item.path}
//               className={styles.navLink}
//               key={item.name}
//               onClick={handleClick}
//             >
//               <Tooltip title={item.name} placement="right" arrow>
//                 <Button
//                   className={`${
//                     item.active ? styles.activeIconButton : styles.iconButton
//                   }`}
//                 >
//                   <FontAwesomeIcon icon={item.icon} />
//                 </Button>
//               </Tooltip>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SideNav;
const SideNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={image} alt="Corona Virus" />
        COVID-19 India
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/stat">Graphs</Nav.Link>
          <Nav.Link href="/symptoms">Symptoms</Nav.Link>
          <Nav.Link href="/prevention">Prevention</Nav.Link>
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default SideNav;
