const axios = require('axios');

const getTopRepos = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        params: {
          sort: 'stars',
          direction: 'desc',
          per_page: 10,
        },
      },
    );

    const repos = response.data;
    repos.forEach((repo, index) => {
      console.log(
        `${index + 1}. ${repo.name} (⭐️ ${repo.stargazers_count} stars)`,
      );
    });
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
  }
};

getTopRepos('google');
