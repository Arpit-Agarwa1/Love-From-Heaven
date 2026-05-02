import { createApp } from './app.js';

// Port the API listens on (change with PORT=4000 node src/server.js if you like).
const PORT = Number(process.env.PORT) || 3000;

const app = createApp();

app.listen(PORT, () => {
  console.log(`Backend ready: http://localhost:${PORT} (API lives under /api)`);
});
