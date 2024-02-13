"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { AppInput } from "./components/AppInput/AppInput";
import NavBar from "./components/NavBar/NavBar";
import AppSelect from "./components/AppSelect/AppSelect";
import AppButton from "./components/AppButton/AppButton";
import ExpandableCard from "./components/ExpandabelCard/ExpandableCard";
import { PiBellRingingFill } from "react-icons/pi";
import { IoIosArrowDropdown } from "react-icons/io";
export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        <div className={styles.navSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/streetsuitelogo-04.png"
              className={styles.logo}
              width={350}
              height={71}
              quality={100}
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <section className={styles.HSectionOne + " poppins-regular"}>
            <AppInput />
            <div className={styles.info}>
              <div className={styles.notification}>
                <PiBellRingingFill color={"#554DB7"} size={24} />
                <div className={styles.notificationNumber}>
                  <p>6</p>
                </div>
              </div>
              <div className={styles.photo}></div>
              <div className={styles.name}>
                <a3>alhussien</a3>
                <p className={styles.role}>admin</p>
              </div>
              <IoIosArrowDropdown size={18} color="#565656" />
            </div>
          </section>
        </div>
        <NavBar />
      </header>
      <main className={styles.main}>
        <section className={styles.filtersSection}>
          <h1 className="poppins-semibold">filter</h1>
          <AppSelect options={optionsOne} title={"Industry"} />
          <AppSelect options={optionsTwo} title={"Market Cap"} />
          <AppSelect options={optionsThree} title={"Risk"} />
          <AppButton />
        </section>
        <section className={styles.mainSection}>
          <ExpandableCard content={content} />
          <ExpandableCard content={content} />
          <ExpandableCard content={content} />
          <ExpandableCard content={content} />
          <ExpandableCard content={content} />
        </section>
      </main>
    </div>
  );
}
const content =
  "Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.";

const optionsOne = [{ value: "Health care", label: "Health care" }];

const optionsTwo = [{ value: "Large-cap", label: "Large-cap" }];

const optionsThree = [
  { value: "Low risk", label: "Low risk" },
  { value: "Mid-risk", label: "Mid-risk" },
  { value: "High risk", label: "High risk" },
];
