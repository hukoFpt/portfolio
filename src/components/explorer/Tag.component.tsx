import React from "react";

// Define the first component
const Tag = ({ label }: { label: string }) => {
  return <span className="px-2 py-1 bg-blue-500 text-white rounded">{label}</span>;
};

// Define the second component
const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
};

// Define an interface for the exported components
interface TagComponents {
  Tag: typeof Tag;
  TagList: typeof TagList;
}

// Export the components as part of an object
const components: TagComponents = {
  Tag,
  TagList,
};

export default components;