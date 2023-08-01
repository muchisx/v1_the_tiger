// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages
import Job from '@pages/Job';
import Home from '@pages/Home';
import Work from '@pages/Work';
import About from '@pages/About';
import WebDev from '@pages/WebDev';
import Contact from '@pages/Contact';
import Shopify from '@pages/Shopify';
import Services from '@pages/Services';
import NotFound from '@pages/NotFound';
import Playground from '@pages/Playground';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'playground', Component: Playground },
      { path: 'contact', Component: Contact },
      { path: 'about', Component: About },
      {
        path: 'work',
        children: [
          { index: true, Component: Work },
          { path: ':jobId', Component: Job },
        ],
      },
      { path: 'services', Component: Services },
      { path: 'web-dev', Component: WebDev },
      { path: 'shopify', Component: Shopify },
      { path: '*', Component: NotFound },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
