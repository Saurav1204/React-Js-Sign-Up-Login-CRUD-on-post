import { changenumber } from "./Updown";

import { combinReducers } from "redux";

const root = combinReducers({
    changenumber
});

export default root 