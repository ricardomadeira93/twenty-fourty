import Link from 'next/link';
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex py-4 bg-slate-950 text-white'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='flex justify-between items-center w-full'>
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
              <span className='mx-4'>Contact</span>
            </Link>
          </div>
          <div className='flex items-center'>
            <SignedIn>
              <div>
                <SignOutButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div>
                <SignInButton />
                <SignUpButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
