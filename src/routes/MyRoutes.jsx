import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

// Lazy load the components
const Home = lazy(() => import('./../pages/main/Home'));
const Single = lazy(() => import('./../pages/Single/Single'));
const List = lazy(() => import('./../pages/List/List'));
const Search = lazy(() => import('./../pages/Search/Search'));

const LoadingComponent = () => (
  <div style={{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0'
  }}>
    <CircularProgress />
  </div>
);

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<List />} />
          <Route path="/article" element={<Single />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;
