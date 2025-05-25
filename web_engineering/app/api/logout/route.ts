import {NextResponse} from "next/server";

export function GET() {
  const response = NextResponse.json({code: 200, message: 'success'});
  response.cookies.delete('auth_token');
  return response;
}