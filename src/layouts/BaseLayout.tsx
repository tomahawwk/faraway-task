import {PropsWithChildren} from 'react';
import Header from '../components/Header';

const BaseLayout = ({children}: PropsWithChildren) => {
  return (
    <main className="w-screen wrapper grid gap-md pb-xl">
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default BaseLayout;
