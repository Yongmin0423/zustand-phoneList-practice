import { Button, TextField } from "@mui/material";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import { usePhoneBookStore } from "../assets/usePhoneBookStore";

export default function ContactForm() {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
  };

  return (
    <div className={styles.Btn}>
      <TextField
        id="name"
        label="name"
        variant="outlined"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="phone-number"
        variant="outlined"
        value={phoneNumber}
        type="number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button onClick={handleAddContact} variant="contained">
        Add
      </Button>
    </div>
  );
}
