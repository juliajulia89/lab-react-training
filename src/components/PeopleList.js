import PeopleCard from "./PeopleCard"

const IdCard = [
  {id:"hdjsbdydcg",
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:"178",
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"},

{  id:"hdjssqnjwydcg",
lastName:'Delores',
  firstName:'Obrien',
  gender:'female',
  height:"172",
  birth: new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"}
]

export default function PeopleList(props){
    return (
       < div className="list">
        <h2> People List </h2>
        {IdCard.map((people)=> <PeopleCard key={people._id} people={people} />)}
        </div>
    )
}