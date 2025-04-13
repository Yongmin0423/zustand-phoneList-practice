import { usePhoneBookStore } from "../assets/usePhoneBookStore";
import styles from "./ContactList.module.css";
import { useState } from "react";

export default function ContactList() {
  const { phoneBook } = usePhoneBookStore();
  const [inputValue, setInputValue] = useState(""); // 인풋에 입력하는 값
  const [searchTerm, setSearchTerm] = useState(""); // 검색 버튼 누를 때 적용되는 검색어

  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 방지
    setSearchTerm(inputValue); // 검색어로 입력값 적용
  };

  const filteredPhoneBook =
    searchTerm === ""
      ? phoneBook
      : phoneBook.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phoneNumber.includes(searchTerm)
        );

  return (
    <div>
      <div className={styles.top}>
        <h2> Contact List</h2>
        <form onSubmit={handleSearch}>
          <input
            placeholder="Write Name or PhoneNumber"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div>
        {filteredPhoneBook.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>PhoneNumber: {item.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
