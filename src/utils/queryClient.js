import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  // You can add any configuration options here as needed
});

export { queryClient, QueryClientProvider };