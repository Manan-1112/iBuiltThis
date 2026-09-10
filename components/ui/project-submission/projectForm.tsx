"use client";

import { useState } from "react";
const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Svelte",
  "Node.js",
  "Express.js",
  "Django",
  "Django REST Framework",
  "Flask",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Firebase",
  "Supabase",
  "Prisma",
  "Mongoose",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Tailwind CSS",
  "Bootstrap",
  "Docker",
  "AWS",
  "FastApi",
  "HTML",
];

export default function ProjectForm() {
  const [techSearch, setTechSearch] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const filteredTechnologies = technologies.filter(
    (technology) =>
      technology.toLowerCase().includes(techSearch.toLowerCase()) &&
      !selectedTechnologies.includes(technology)
  );

  const selectTechnology = (technology: string) => {
    setSelectedTechnologies((prev) => [...prev, technology]);
    setTechSearch("");
  };

  const removeTechnology = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((item) => item !== technology)
    );
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedTechnologies.length === 0) {
      alert("Please select at least one technology.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const userId="user_12ijixj"
    const projectData = {
      clerkUserId:userId,
      title: formData.get("title"),
      description: formData.get("description"),
      githubUrl: formData.get("githubUrl"),
      liveUrl: formData.get("liveUrl"),
      technologies: selectedTechnologies,
      category: formData.get("category"),
    };

    console.log(projectData);
    
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });
  };

  return (
    <div className="flex justify-center px-4 pb-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-card rounded-xl border p-6 sm:p-8"
      >
        {/* Project Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 font-semibold text-[#073b4c]"
          >
            Project Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Enter your project name"
            className="w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 outline-none focus:ring-2 focus:ring-[#c94e8c]"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 font-semibold text-[#073b4c]"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Tell the community what your project does..."
            className="w-full resize-none rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 outline-none focus:ring-2 focus:ring-[#c94e8c]"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Github */}
          <div>
            <label
              htmlFor="githubUrl"
              className="block mb-2 font-semibold text-[#073b4c]"
            >
              GitHub Repository
            </label>

            <input
              id="githubUrl"
              name="githubUrl"
              type="url"
              required
              placeholder="https://github.com/..."
              className="w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 outline-none focus:ring-2 focus:ring-[#c94e8c]"
            />
          </div>

          {/* Live URL */}
          <div>
            <label
              htmlFor="liveUrl"
              className="block mb-2 font-semibold text-[#073b4c]"
            >
              Live Project URL
            </label>

            <input
              id="liveUrl"
              name="liveUrl"
              type="url"
              required
              placeholder="https://yourproject.com"
              className="w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 outline-none focus:ring-2 focus:ring-[#c94e8c]"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-[#073b4c]">
            Tech Stack
          </label>

          <div className="relative">
            {/* Selected technologies + search */}
            <div className="min-h-[52px] w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-3 py-2 flex flex-wrap items-center gap-2 focus-within:ring-2 focus-within:ring-[#c94e8c]">
              {selectedTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="flex items-center gap-1 rounded-full bg-[#8bdad5] px-3 py-1 text-sm text-[#073b4c]"
                >
                  {technology}

                  <button
                    type="button"
                    onClick={() => removeTechnology(technology)}
                    className="ml-1 font-bold hover:text-[#c94e8c]"
                    aria-label={`Remove ${technology}`}
                  >
                    ×
                  </button>
                </span>
              ))}

              <input
                type="text"
                value={techSearch}
                onChange={(e) => setTechSearch(e.target.value)}
                placeholder={
                  selectedTechnologies.length === 0
                    ? "Search technologies..."
                    : "Add technology..."
                }
                className="min-w-[180px] flex-1 bg-transparent px-2 py-1 outline-none"
              />
            </div>

            {/* Search results */}
            {techSearch.trim() && filteredTechnologies.length > 0 && (
              <div className="absolute z-50 mt-1 w-full max-h-52 overflow-y-auto rounded-lg border border-[#8aa5a5] bg-[#faf7e8] shadow-lg">
                {filteredTechnologies.map((technology) => (
                  <button
                    key={technology}
                    type="button"
                    onClick={() => selectTechnology(technology)}
                    className="block w-full px-4 py-3 text-left text-[#073b4c] hover:bg-[#e8dfc8]"
                  >
                    {technology}
                  </button>
                ))}
              </div>
            )}

            {/* No result */}
            {techSearch.trim() && filteredTechnologies.length === 0 && (
              <div className="absolute z-50 mt-1 w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 text-sm text-muted-foreground shadow-lg">
                No technology found. Select from the available options.
              </div>
            )}
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Search and select technologies from the list.
          </p>
        </div>

        {/* Category */}
        <div className="mb-8">
          <label
            htmlFor="category"
            className="block mb-2 font-semibold text-[#073b4c]"
          >
            Project Category
          </label>

          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="w-full rounded-lg border border-[#8aa5a5] bg-[#faf7e8] px-4 py-3 outline-none focus:ring-2 focus:ring-[#c94e8c]"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Web Application">Web Application</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="AI / Machine Learning">
              AI / Machine Learning
            </option>
            <option value="SaaS">SaaS</option>
            <option value="Developer Tool">Developer Tool</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#c94e8c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Submit Project →
          </button>
        </div>
      </form>
    </div>
  );
}