import matter from "gray-matter";
import fs from "fs/promises";
import { compareDates, isValidDate, normalizeDate } from "./dateHelpers";
import { CourseMetadata } from "@interfaces";

export const getAllCourseSlugs = async () => {
  const all = await getAllCourses();
  return all.map((course) => course.slug);
};

export const getAllCourses = async (): Promise<CourseMetadata[]> => {
  const paths = await fs.readdir("content/courses");
  const allData = await Promise.all(paths.map(getCourseMetadata));
  const filtered = allData
    .map(normalizeMetadata)
    .filter(Boolean) as CourseMetadata[];
  return filtered.sort((a, b) => compareDates(a.start_time, b.start_time));
};

export const getCourseMetadata = async (pathOrSlug: string) => {
  const { content, ...data } = await getCourseData(pathOrSlug);
  return data;
};

export const getCourseData = async (pathOrSlug: string) => {
  const filename = pathOrSlug.endsWith(".md") ? pathOrSlug : `${pathOrSlug}.md`;
  const fullPath = `content/courses/${filename}`;
  const buffer = await fs.readFile(fullPath);
  const { data, content, excerpt } = matter(buffer, { excerpt: true });

  return {
    ...data,
    excerpt,
    slug: filename.replace(/\.md$/, ""),
    content: maybeRemoveExcerpt(content, excerpt)
  };
};

export const validateMetadata = (data: Record<string, any>) => {
  return (
    typeof data.title === "string" &&
    isValidDate(data.start_time) &&
    isValidDate(data.end_time)
  );
};

export const normalizeMetadata = (
  data: Record<string, any>
): CourseMetadata | null => {
  if (!validateMetadata(data)) return null;
  return {
    ...data,
    start_time: normalizeDate(data.start_time)!,
    end_time: normalizeDate(data.end_time)!
  } as CourseMetadata;
};

export const maybeRemoveExcerpt = (
  content: string,
  excerpt: string | undefined
) => {
  if (!excerpt) return content;

  return content.slice(excerpt.length).replace(/^-{3,}/, "");
};
