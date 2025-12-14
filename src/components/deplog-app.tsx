"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronsUpDownIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  GitBranchIcon,
  ArrowUpRightIcon,
  PowerIcon,
} from "lucide-react";

interface Deployment {
  title: string;
  project: string;
  branch: string;
  timestamp: string;
  status: "building" | "ready" | "error" | "queued";
  statusLabel: string;
  previewUrl: string;
}

interface GitHubRepository {
  name: string;
}

export default function PulseApp() {
  const deployments: Deployment[] = [
    {
      title: "feat: add status filtering",
      project: "deplog-web",
      branch: "main",
      timestamp: "Building...",
      status: "building",
      statusLabel: "Building...",
      previewUrl: "deplog-web.vercel.app",
    },
    {
      title: "fix: resolve sync issue",
      project: "deplog-web",
      branch: "main",
      timestamp: "10 minutes ago",
      status: "ready",
      statusLabel: "Ready",
      previewUrl: "deplog-web.vercel.app",
    },
    {
      title: "chore: update packages",
      project: "side-project",
      branch: "main",
      timestamp: "2 hours ago",
      status: "error",
      statusLabel: "Error",
      previewUrl: "side-project.vercel.app",
    },
    {
      title: "feat: improve UI clarity",
      project: "deplog-web",
      branch: "main",
      timestamp: "5 days ago",
      status: "ready",
      statusLabel: "Ready",
      previewUrl: "deplog-web.vercel.app",
    },
    {
      title: "fix: correct date format",
      project: "side-project",
      branch: "main",
      timestamp: "6 days ago",
      status: "ready",
      statusLabel: "Ready",
      previewUrl: "side-project.vercel.app",
    },
  ];

  const repositories: GitHubRepository[] = [
    { name: "personal-portfolio" },
    { name: "family-recipe-book" },
  ];

  const githubDeployments: Record<GitHubRepository["name"], Deployment[]> = {
    "personal-portfolio": [
      {
        title: "chore: update seo tags",
        project: "personal-portfolio",
        branch: "main",
        timestamp: "Queued...",
        status: "queued",
        statusLabel: "Queued...",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "fix: mobile layout shift",
        project: "personal-portfolio",
        branch: "main",
        timestamp: "Building...",
        status: "building",
        statusLabel: "Building...",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "style: dark mode colors",
        project: "personal-portfolio",
        branch: "main",
        timestamp: "1 hours ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "side-project.vercel.app",
      },
      {
        title: "feat: hero and navbar",
        project: "personal-portfolio",
        branch: "main",
        timestamp: "3 hours ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "init: next.js + tailwind",
        project: "personal-portfolio",
        branch: "main",
        timestamp: "2 days ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "side-project.vercel.app",
      },
    ],
    "family-recipe-book": [
      {
        title: "feat: prisma schema setup",
        project: "family-recipe-book",
        branch: "main",
        timestamp: "4 days ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "feat: recipe crud api",
        project: "family-recipe-book",
        branch: "main",
        timestamp: "4 days ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "feat: s3 image upload",
        project: "family-recipe-book",
        branch: "main",
        timestamp: "5 days ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "side-project.vercel.app",
      },
      {
        title: "fix: search pagination",
        project: "family-recipe-book",
        branch: "main",
        timestamp: "5 days ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "deplog-web.vercel.app",
      },
      {
        title: "refactor: optimize queries",
        project: "family-recipe-book",
        branch: "main",
        timestamp: "2 weeks ago",
        status: "ready",
        statusLabel: "Ready",
        previewUrl: "side-project.vercel.app",
      },
    ],
  };

  const getSelectedDeployments = () => {
    if (selectedSource === "github") {
      return repositories.flatMap((repo) => githubDeployments[repo.name] || []);
    }
    return deployments;
  };

  const [minScale, setMinScale] = useState(1.2); // Default max scale
  const [maxScale, setMaxScale] = useState(1.35); // Default max scale
  const [selectedDeployment, setSelectedDeployment] = useState<
    Deployment | undefined
  >(undefined);
  const [selectedSource, setSelectedSource] = useState<
    "vercel" | "github" | undefined
  >("vercel");
  const [selectedRepository, setSelectedRepository] = useState<
    GitHubRepository | undefined
  >(repositories[0]);

  const [deploymentList, setDeploymentList] = useState<Deployment[]>(
    getSelectedDeployments(),
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMinScale(0.95); // Smaller scale on mobile
        setMaxScale(1.1); // Smaller scale on mobile
      } else if (width < 1024) {
        setMinScale(1); // Smaller scale on mobile
        setMaxScale(1.3); // Medium scale on tablets
      } else {
        setMinScale(1.2); // Smaller scale on mobile
        setMaxScale(1.35); // Full scale on large screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll(); // Track scroll progress
  const scale = useTransform(
    scrollYProgress,
    [0, minScale],
    [minScale, maxScale],
  ); // Scale from 1 to 1.3

  return (
    <div className="flex w-full items-center justify-center sm:h-[420px] sm:w-[320px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        style={{
          transformOrigin: "top", // Keeps top-left as anchor
          scale,
        }}
        className="h-full w-full"
      >
        <div className="relative w-full rounded-2xl bg-[#0b0b0b] p-4 shadow-2xl shadow-slate-800/60 backdrop-blur-3xl">
          <div className="mb-4 flex items-center justify-between gap-2 text-zinc-400">
            {selectedDeployment && (
              <div
                className="flex cursor-pointer items-center gap-2 rounded-md bg-zinc-800 px-2 py-1 text-white"
                onClick={() => setSelectedDeployment(undefined)}
              >
                <ChevronLeftIcon className="h-4 w-4" />
                <h2 className="text-xs font-medium">Back</h2>
              </div>
            )}
            <div className="flex w-full gap-2 rounded-md bg-zinc-800">
              <div
                className={`flex w-1/2 cursor-pointer items-center justify-center rounded-md px-2 py-1 ${
                  selectedSource === "vercel" ? "bg-blue-500" : "bg-zinc-800"
                }`}
                onClick={() => {
                  setSelectedSource("vercel");
                  setDeploymentList(deployments);
                }}
              >
                <h2 className="text-xs font-medium text-white">Vercel</h2>
              </div>
              <div
                className={`flex w-1/2 cursor-pointer items-center justify-center rounded-md px-2 py-1 ${
                  selectedSource === "github" ? "bg-blue-500" : "bg-zinc-800"
                }`}
                onClick={() => {
                  if (selectedDeployment) {
                    return;
                  }
                  setSelectedSource("github");
                  selectedRepository?.name
                    ? setDeploymentList(
                        githubDeployments[selectedRepository.name],
                      )
                    : [];
                }}
              >
                <h2 className="text-xs font-medium text-white">GitHub</h2>
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-1 rounded-md bg-zinc-800 px-3 py-1 text-xs font-medium text-white">
              <PowerIcon size={14}></PowerIcon>Quit
            </div>
          </div>
          {!selectedDeployment && (
            <div className="flex items-center justify-between text-white">
              <h2 className="text-xl font-bold">Deployments</h2>

              <div className="flex items-center gap-1 text-xs">
                Menu <ChevronDownIcon className="h-4 w-4"></ChevronDownIcon>{" "}
              </div>
            </div>
          )}

          {selectedSource === "github" && (
            <div
              className={`mt-2 flex w-full cursor-pointer items-center justify-between rounded-md bg-zinc-800 px-2 py-1 text-white`}
            >
              <select
                className="w-full appearance-none border-none text-xs font-medium"
                onChange={(e) => {
                  const repo = repositories.find(
                    (r) => r.name === e.target.value,
                  );
                  setSelectedRepository(repo);
                  setDeploymentList(githubDeployments[e.target.value] || []);
                }}
                value={selectedRepository?.name}
              >
                {repositories.map((repo, index) => (
                  <option key={index}>{repo.name}</option>
                ))}
              </select>
              <ChevronsUpDownIcon size={16}></ChevronsUpDownIcon>
            </div>
          )}

          {!selectedDeployment && (
            <div className="mt-2 space-y-2">
              {deploymentList.map((deployment, index) => (
                <div
                  key={index}
                  className="-mx-3 cursor-pointer rounded-md border-b border-zinc-800 px-3 py-2 text-sm last:border-0 hover:bg-zinc-800"
                  onClick={() => {
                    if (selectedSource === "github") {
                      window.open(`https://github.com`, "_blank");
                    } else {
                      setSelectedDeployment(deployment);
                    }
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-4 w-4 rounded-full ${deployment.status === "ready" && "bg-[#50E3C2]"} ${deployment.status === "building" && "animate-pulse bg-[#F5A623]"} ${deployment.status === "error" && "bg-[#FF0000]"} ${deployment.status === "queued" && "bg-[#F5A623]"}`}
                      />
                      <span className="font-semibold text-white">
                        {deployment.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <GitBranchIcon className="h-4 w-4" />
                      <span className="font-medium">{deployment.branch}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between font-medium">
                    <span className="text-zinc-400">{deployment.project}</span>
                    <span className="text-zinc-400">
                      {deployment.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedDeployment && (
            <div className="grid w-full space-y-2">
              <div className="flex items-center gap-3">
                <div
                  className={`h-4 w-4 rounded-full ${selectedDeployment.status === "ready" && "bg-[#50E3C2]"} ${selectedDeployment.status === "building" && "animate-pulse bg-[#F5A623]"} ${selectedDeployment.status === "error" && "bg-[#FF0000]"}`}
                />
                <span className="text-sm font-bold text-white">
                  {selectedDeployment.statusLabel}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">Name</span>
                <span className="text-sm font-semibold text-white">
                  {selectedDeployment.project}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Previev URL
                </span>
                <a
                  className="flex items-center gap-1 text-sm font-semibold text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://vercel.com"
                >
                  {selectedDeployment.previewUrl}{" "}
                  <ArrowUpRightIcon className="mt-0.5 h-4 w-4"></ArrowUpRightIcon>
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Git Branch
                </span>
                <span className="text-sm font-semibold text-white">
                  {selectedDeployment.branch}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Commit Message
                </span>
                <span className="text-sm font-semibold text-white">
                  {selectedDeployment.title}
                </span>
              </div>
              <div className="w-full border"></div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Created
                </span>
                <span className="text-sm font-semibold text-white">
                  {selectedDeployment.timestamp}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Creator
                </span>
                <span className="text-sm font-semibold text-white">
                  yedmrblt
                </span>
              </div>
              <div>
                <a href="https://vercel.com" target="_blank" rel="noreferrer">
                  <button className="w-full cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
                    Inspect on Vercel
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
