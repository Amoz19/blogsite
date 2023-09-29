import '@/styles/globals.css'

import {DescriptionProvider} from "./context/DescriptionContext";
import {ImagesProvider} from "./context/ImagesContext";
import { DataProvider } from './context/DataContext';
import { DOMContextProvider } from './context/DOMContext';

export default function App({ Component, pageProps }) {
  return (
    <>
        <DescriptionProvider>
          <ImagesProvider>
                <DataProvider>
                  <DOMContextProvider>
                      <Component {...pageProps} />
                  </DOMContextProvider>
                </DataProvider>
          </ImagesProvider>
        </DescriptionProvider>
    </>
   

  )
}
