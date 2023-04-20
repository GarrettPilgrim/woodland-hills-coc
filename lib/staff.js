import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { parse, stringify } from "yaml";

const matter = require("gray-matter");

const staffDirectory = path.join(process.cwd(), "content/staff");

export function getSortedStaff() {
  const fileNames = fs.readdirSync(staffDirectory);
  const allStaff = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(staffDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // let matterResult = matter(fileContents);
    const { data, content } = matter(fileContents, {
      engines: {
        yaml: {
          parse,
          stringify,
        },
      },
    });

    return {
      id,
      ...data,
      ...content,
    };
  });

  return allStaff.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllStaffIds() {
  const fileNames = fs.readdirSync(staffDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getStaffData(id) {
  const fullPath = path.join(staffDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents, {
    engines: {
      yaml: {
        parse,
        stringify,
      },
    },
  });

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...data,
  };
}
