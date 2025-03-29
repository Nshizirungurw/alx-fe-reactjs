const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
  }
};
