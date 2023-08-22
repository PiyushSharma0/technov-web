import client from "@/db";
import { NextResponse } from "next/server";

async function toJSON(body) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks = [];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(""));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }

  return read();
}

export async function POST(req, res) {
  try {
    const requestData = await toJSON(req.body);
    const data = JSON.parse(requestData["query"]);

    const id = data.SystemId;

    const myDB = client.db("Technova");
    const myColl = myDB.collection("students");

    const filter = { _id: id };

    const updateDocument = {
      $set: {
        Image: data.Image,
        Name: data.Name,
        Club: data.Club,
        LinkedIn: data.LinkedIn,
        Github: data.Github,
        Course: data.Course,
      },
    };

    const result = await myColl.updateOne(filter, updateDocument);

    // console.log('docment',result);

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}
