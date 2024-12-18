import 'dotenv/config';
import app from "./api/app";

const port: number = Number(process.env.PORTA) || 3000;

app.listen(port, () => console.log(`API rodando em http://localhost:${port}${process.env.ENDPOINT_RAIZ}`))