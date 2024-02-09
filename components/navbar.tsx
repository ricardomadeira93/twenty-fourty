import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-4 bg-[#f2da00] text-slate-950 fixed top-0 left-0 w-full z-10'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='flex justify-between items-center'>
          <div>
            <h1>Logo Here</h1>
          </div>
          <div className='flex'>
            <Link href='/'>
              <span className='mx-4'>Home</span>
            </Link>
            <Link href='/about'>
              <span className='mx-4'>About</span>
            </Link>
            <Link href='/contact'>
              <span className='mx-4'>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
