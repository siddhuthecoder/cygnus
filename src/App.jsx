import './App.css';
import { RouterProvider } from "react-router-dom";
import { mainRouter } from './routes';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './components/ui/loading';
function App() {
  
  return(
    <>
      <div className='w-full h-full overflow-y-auto overflow-x-hidden'>
        <Suspense fallback={<Loading/>}>
          <RouterProvider router={mainRouter} />
        </Suspense>
        <Toaster position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        
          // Default options for specific types
          success: {
            duration: 3000,
            style:{
              background: 'rgb(134 239 172)',
              color: "green",
              border: "2px solid white",
              fontWeight: "500",
            },
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
          error: {
            duration: 2000,
            style:{
              background: 'rgb(252 165 165)',
              color: "red",
              border: "2px solid white",
              fontWeight: "500",
            },
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
          },
        }}
        />
      </div>
    </>
  );
}

export default App
