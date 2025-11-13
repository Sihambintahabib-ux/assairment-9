import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
      <div className={`min-h-screen`}>
        <header>
          <Header></Header>
        </header>
        <main>
          <section>
            <Outlet></Outlet>
          </section>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default Root;