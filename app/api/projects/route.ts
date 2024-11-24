import { NextResponse } from "next/server";
import projects from "./data/projects.json";

export async function GET() {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
