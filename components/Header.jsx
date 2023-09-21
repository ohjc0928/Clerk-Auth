import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
  const { userId } = auth()
  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />         
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
