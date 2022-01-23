import styles from "./MainList.module.css";

//props should be items= an array of objects, that have id and itme property
//example: items=[ {id:1, item:<p>Hello</p>}, {id: 2, item:<p>World</p>} ]
function MainList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => {
        return <li key={item.id}>{item.item}</li>;
      })}
    </ul>
  );
}

export default MainList;
