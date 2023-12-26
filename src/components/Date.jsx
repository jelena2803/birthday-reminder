import React from 'react'
import { format } from "date-fns";

function Date() {
let formattedDate = format(new Date(), 'MMMM do yyyy');
// const [date] = useState(new Date());
// const [day] = useState(date.getDate());
// const [year] = useState(date.getFullYear());
// let [month] = useState(date.getMonth());

return <h3>{formattedDate}</h3>;

}

export default Date

