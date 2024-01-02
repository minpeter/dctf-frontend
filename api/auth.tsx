"use client";
export function SetAuthToken({ authToken }: { authToken: string }) {
  localStorage.token = authToken;
}
export function Logout() {
  localStorage.removeItem("token");
}

export function githubCallback({ githubCode }: { githubCode: string }) {
  return fetch("/api/integrations/github/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ githubCode }),
  }).then((res) => res.json());
}

export async function login({ githubToken }: { githubToken: string }) {
  const resp = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ githubToken: githubToken }),
  }).then((res) => res.json());

  switch (resp.kind) {
    case "goodLogin":
      return {
        authToken: resp.data.authToken,
      };
    default:
      return {
        badUnknownUser: resp.error,
      };
  }
}
