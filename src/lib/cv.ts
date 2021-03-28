import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const cvDirectory = path.join(process.cwd(), 'data/cv');

export default function getCvData() {
  const fullPath = path.join(cvDirectory, 'cv.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return matterResult;
}
