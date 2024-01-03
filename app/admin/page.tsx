"use client";

import Problem, { ProblemProps } from "@/components/problem";

export default function Page() {
  const p1: ProblemProps = {
    id: "1",
    name: "sanity-check",
    description: "I get to write the sanity check challenge! Alright!",
    category: "misc",
    author: "minpeter",
    files: [],
    points: 485,
    solves: 1,
    dynamic: "web",
  };
  return (
    <>
      admin page
      <Problem problem={p1} solved={true} setSolved={() => {}} />
    </>
  );
}
