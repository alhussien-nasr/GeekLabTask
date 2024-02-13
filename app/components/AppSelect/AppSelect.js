import React from "react";
import Select, { components } from "react-select";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

import "./styles.css";
import { useState } from "react";
export default function AppSelect({ options, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#181818",
      width: 318,
      height: 44,
      borderRadius: 8,
      marginTop: 8,
      marginBottom: 8,
      borderColor: "#181818",
      padding: 0,
    }),

    option: (provided, {  isFocused, isSelected }) => {
      return {
        ...provided,
        backgroundColor: isFocused ? "#999999" : null,
        backgroundColor: "#181818",
        color: "#333333",
        margin: 0,
        color: isSelected ? "#887EFF" : "#6B6B6B",
        display: "flex",
        alignItems: "center",
        border: 0,
        padding: 15,
        ":hover": {
          backgroundColor: "#F1F3F5",
        },
      };
    },
    menu: (base) => ({
      ...base,
      borderRadius: 10,
      border: 0,


    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      borderRadius: 10,
      border: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const CaretDownIcon = () => {
    return isOpen ? (
      <IoIosArrowUp style={{ marginRight: 10 }} color="white" size={20} />
    ) : (
      <IoIosArrowDown style={{ margin: 10 }} color="white" />
    );
  };

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <span style={{ marginLeft: 20 }}>
          <HiMiniSquare3Stack3D size={20} color="#6B6B6B" />
        </span>
        {children}
      </components.Control>
    );
  };

  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <CiCircleCheck style={{ marginRight: 20 }} size={20} />
      {props.data.label}
    </Option>
  );

  return (
    <div className="select-container poppins-semibold">
      <h3 className="title">{title}</h3>
      <Select
        options={options}
        className="poppins-semibold"
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        styles={customStyles}
        components={{
          DropdownIndicator: CaretDownIcon,
          Control,
          Option: IconOption,
        }}
      />
    </div>
  );
}
