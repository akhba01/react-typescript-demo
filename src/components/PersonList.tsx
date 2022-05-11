import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h2>Person List</h2>
      <ul>
        {props.names.map((person) => (
          <li key={person.first}>
            {person.first} {person.last}
          </li>
        ))}
      </ul>
    </div>
  );
};
