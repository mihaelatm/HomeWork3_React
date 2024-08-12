import { useState } from "react";
import styles from "./styles.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const handleDelete = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <div className={styles.container}>
      <h2>Список людей</h2>
      <ul className={styles.people_list}>
        {people.map((person) => (
          <li key={person.id} className={styles.person_item}>
            <span>
              {person.name}, {person.age} лет
            </span>
            <button
              onClick={() => handleDelete(person.id)}
              className={styles.delete_btn}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
