import React, { useState } from "react";
import "./styles.css";
import Image from 'next/image';
import { TbCurrencyDollar } from "react-icons/tb";
import { FaFileContract } from "react-icons/fa";
import { BsDatabaseUp } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import SVGIMG from "../../../public/StockUp.svg";

export default function ExpandableCard({ content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card poppins-regular ${expanded && "expanded"}` } onClick={toggleExpansion}>
      {expanded && (
        <div className={`card-header ${expanded && "show"}`}>
          <div className={`header-content `}>
            <TbCurrencyDollar size={42} />
            <p>$TSLA</p>
          </div>
          <div className="separetor" />
          <div className="header-content">
            <FaFileContract size={42} />
            <p>200 contracts</p>
          </div>
          <div className="separetor" />
          <div className="header-content">
            <HiOutlineArrowTrendingUp src={SVGIMG} size={42} />
            <p>12.2%</p>
          </div>
          <div className="separetor" />
          <div className="header-content">
            <BsDatabaseUp size={42} />
            <p>High Risk</p>
          </div>
        </div>
      )}
      <div className="card-content">
        <h3>{content}</h3>
      </div>
    </div>
  );
}
