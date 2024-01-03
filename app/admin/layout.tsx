"use client";

import { checkAdmin } from "@/api/admin";

import { useState, useEffect } from "react";

import NotFound from "../[...notfound]/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    checkAdmin().then(setAdmin);
  }, []);

  return admin ? children : <NotFound />;
}
