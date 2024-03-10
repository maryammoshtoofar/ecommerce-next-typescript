import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export const POST = async (req: any, res: any) => {
  try {
    const formData = await req.formData();
    const file = formData.get('image');
    if (!file) {
      return NextResponse.json(
        { error: 'No files received.' },
        { status: 400 },
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(' ', '_');
    await writeFile(
      path.join(process.cwd(), 'public/uploads/' + filename),
      buffer,
    );
    return NextResponse.json({
      Message: 'Success',
      filename: filename,
      status: 201,
    });
  } catch (error) {
    console.log('Error occurred ', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
};
