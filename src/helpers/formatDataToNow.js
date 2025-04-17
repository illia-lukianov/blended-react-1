import { formatDistanceToNow,} from "date-fns/formatDistanceToNow"
import { format } from 'date-fns';

const formatDataToNow = (postedAt) => {
 return formatDistanceToNow(
  postedAt,
  {addSuffix: true}
)
}

export default formatDataToNow
export const formatData = (data) => {
  return format(new Date(data), "Pp");
}