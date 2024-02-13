import React from "react";
import "./styles.css";
export default function NavBar() {
  return (
    <ui className="navbar-contanier .poppins-bold ">
      {navBarSections.map((section) => (
        <>
          <ul className="header " style={section.selected && { color: "white" } }>
            {section.comingSoon ? (
              <div className="sub-title">coming soon</div>
            ) : (
              <br />
            )}
            <button disabled={section.comingSoon} className={'btn'}>
              <h1 className="poppins-bold" >{section.title}</h1>
            </button>
          </ul>
          <div className="separetor" />
        </>
      ))}
    </ui>
  );
}

const navBarSections = [
  { title: "Trading", comingSoon: true },
  { title: "Automation", comingSoon: true },
  { title: "Portfolio", comingSoon: true },
  { title: "Alerts", comingSoon: false, selected: true },
  { title: "Training", comingSoon: false },
];
