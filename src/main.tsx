import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import '../i18n'
import { QueryClientProvider } from 'react-query'
import store from './state/configureMutation'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID
const GOOGLE_TAG = import.meta.env.VITE_GOOGLE_TAG

if (GOOGLE_TAG) {
  ReactGA.initialize(GOOGLE_TAG)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    {CLARITY_ID && (
      <Helmet
        script={[
          {
            innerHTML: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");`,
          },
        ]}
      />
    )}
    <QueryClientProvider client={store}>
      <App />
    </QueryClientProvider>
  </React.Fragment>
)
