import { Outlet } from 'react-router-dom';

export function CarrerasLayout() {
  return (
    <div>      
      <main className='min-h-screen pb-24'>
        <Outlet />
      </main>
    </div>
  );
}