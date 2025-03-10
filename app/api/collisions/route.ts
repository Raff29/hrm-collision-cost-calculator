import { NextRequest, NextResponse } from "next/server";

const HRM_API_ENDPOINT = process.env.HRM_API_ENDPOINT;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const params = new URLSearchParams();
  searchParams.forEach((value, key) => {
    params.append(key, value);
  });

  try {
    const response = await fetch(`${HRM_API_ENDPOINT}?${params}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in collision proxy:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
