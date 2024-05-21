import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function QueryProvider({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
QueryClientProvider;

export default QueryProvider;
