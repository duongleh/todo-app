import * as functions from 'firebase-functions';
import app from "./app";

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server start on port ${PORT}`);
// });

export const App = functions.https.onRequest(app);