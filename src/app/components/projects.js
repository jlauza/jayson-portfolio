import { Chip } from "@mui/material";

export default function ProjectCard({
  name,
  authors,
  description,
  image,
  demoLink,
}) {
  return (
    <>
      <div className="mx-auto w-full max-w-lg rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex">
        {/* Project Image (Left Side) */}
        <div className="w-2/5">
          <img
            src={image || "https://via.placeholder.com/600x400"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details (Right Side) */}
        <div className="w-3/5 p-6 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name || "Project Name"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {authors || "Author Name"}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {description || "A brief description of the project goes here."}
          </p>

          {/* View Demo Button */}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Demo →
            </a>
          )}
        </div>
      </div>
    </>
  );
}
