import app from './src/app';

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
