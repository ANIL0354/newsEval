const url =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=pdiRET3l7Osnyk7IHvSPl0ziiWFCFly1&q=unitedstates&page=';

export async function getNews(page = 0) {
  console.log('page', page);
  try {
    let result = await fetch(url + page).then(response => response.json());
    console.log('result', result);
    return result.response.docs || [];
  } catch (error) {
    return error;
  }
}
