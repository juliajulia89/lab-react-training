export default function PeopleCard(props) {
  const { people } = props;
  return (
    <div>
      <p>{people.lastName}</p>
      <p>{people.firstName}</p>
      <p>{people.gender}</p>
      <p>{people.height}</p>
      {/*<p>{people.birth}</p>*/}
     <img src={people.picture} alt = "img person"/>
    </div>
  );
}
