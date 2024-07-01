import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const PREFIX = '/api/users'

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const endpoint = id ? `${API_URL}${PREFIX}/${id}` : API_URL;

  const res = await fetch(endpoint);
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
  const body = await req.json();

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to create data' }, { status: res.status });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to update data' }, { status: res.status });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to delete data' }, { status: res.status });
  }

  return NextResponse.json({ message: 'Data deleted' }, { status: 200 });
}
