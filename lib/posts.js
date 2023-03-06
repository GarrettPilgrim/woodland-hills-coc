import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const matter = require("gray-matter");

const productsDirectory = path.join(process.cwd(), "content/blog");

export function getSortedProducts() {
  const fileNames = fs.readdirSync(productsDirectory);
  const allProducts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });

  return allProducts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProductIds() {
  const fileNames = fs.readdirSync(productsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProductData(id) {
  const fullPath = path.join(productsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
