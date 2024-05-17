import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CustomThemeProvider } from './providers/CustomThemeProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Swap } from './pages/Swap';
import { MetadataContextProvider } from './providers/MetadataContextProvider';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/swap',
          element: <Swap />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

function App() {
  return (
    <CustomThemeProvider>
      <MetadataContextProvider>
        <RouterProvider router={router} />
      </MetadataContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
