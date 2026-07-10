import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,subregion"
  );

  const data = await response.json();

  return NextResponse.json(data);
}