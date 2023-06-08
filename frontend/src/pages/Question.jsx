import { useParams } from "react-router-dom";

function Question() {
  const { familyId } = useParams();
  return familyId;
}
export default Question;
