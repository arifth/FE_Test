import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { url } from 'inspector'
 
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  console.log("apa path nya",path)
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
//TODO: implement cookies and token checking
  const isLoggedIn = (await cookies()).get('token')?.value
  console.log("adakah tokennya",isLoggedIn)
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    isLoggedIn &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  // redirect to /login whenever /
  if (req.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL('/login',req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}