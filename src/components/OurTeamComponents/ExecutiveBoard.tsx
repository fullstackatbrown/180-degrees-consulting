import { BoardMember } from './Types'

type props = {
  boardMembers: BoardMember[]
}

function ExecutiveBoard({ boardMembers }: props) {
  console.log(boardMembers)
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      {boardMembers.map((member) => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 1rem 0" }}>
          <img style={{ height: "5rem", width: "5rem", display: "block"}} src={member.headshot_image.url} alt="Member Headshot" />
          <div style={{ }}>
            <p>{member.name + " (" + member.year + ")"}</p>
            <p>{member.title}</p>
            <p>{member.concentration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExecutiveBoard;
