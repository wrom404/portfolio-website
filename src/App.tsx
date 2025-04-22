import AppRoutes from "./routes/routes";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};

export default App;
