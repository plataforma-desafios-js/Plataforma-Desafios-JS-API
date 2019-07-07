
import app from './app';
import { port } from './configs';
// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
