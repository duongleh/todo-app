import * as functions from 'firebase-functions';
import App from "./app";

const app = new App().app;
const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});

export const APP = functions.https.onRequest(app);