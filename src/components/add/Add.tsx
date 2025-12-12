import type { GridColDef } from "@mui/x-data-grid";
import "./Add.css";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setOpen(false)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column,index) => (
              <div className="item" key={index}>
                <label>{column.headerName} :</label>
                <input className="datain" type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button className="sendbtn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
