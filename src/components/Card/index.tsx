import {FC} from "react";

type Props = {
  title: string;
  description: string;
}
const Card: FC<Props> = ({title, description}) => {

  return (
    <div style={{padding: '20px', border: '1px solid black', width: '200px'}}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card