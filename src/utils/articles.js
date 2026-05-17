import { defaultArticles } from '../data/defaultArticles';

const DELETED_ARTICLES_KEY = 'deletedArticleIds';
const ADDED_ARTICLES_KEY = 'addedArticles';

export const getDeletedArticleIds = () => {
  try {
    const raw = localStorage.getItem(DELETED_ARTICLES_KEY);
    const ids = raw ? JSON.parse(raw) : [];
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
};

const getAddedArticles = () => {
  try {
    const raw = localStorage.getItem(ADDED_ARTICLES_KEY);
    const articles = raw ? JSON.parse(raw) : [];
    return Array.isArray(articles) ? articles : [];
  } catch {
    return [];
  }
};

export const getArticles = () => {
  const deletedIds = getDeletedArticleIds();
  const defaults = defaultArticles.filter(
    (article) => !deletedIds.includes(article.id)
  );
  const added = getAddedArticles().filter(
    (article) => !deletedIds.includes(article.id)
  );
  return [...defaults, ...added];
};

const getNextArticleId = () => {
  const allIds = getArticles().map((article) => article.id);
  const addedIds = getAddedArticles().map((article) => article.id);
  const defaultIds = defaultArticles.map((article) => article.id);
  const deletedIds = getDeletedArticleIds();
  const everyId = [...defaultIds, ...addedIds, ...deletedIds, ...allIds];
  return everyId.length === 0 ? 1 : Math.max(...everyId) + 1;
};

export const addArticle = ({ title, image, content }) => {
  const article = {
    id: getNextArticleId(),
    title: title.trim(),
    image: image.trim(),
    content: content.trim(),
  };
  const added = getAddedArticles();
  localStorage.setItem(ADDED_ARTICLES_KEY, JSON.stringify([...added, article]));
  return article;
};

export const deleteArticle = (id) => {
  const deletedIds = getDeletedArticleIds();
  if (!deletedIds.includes(id)) {
    localStorage.setItem(
      DELETED_ARTICLES_KEY,
      JSON.stringify([...deletedIds, id])
    );
  }

  const added = getAddedArticles();
  if (added.some((article) => article.id === id)) {
    localStorage.setItem(
      ADDED_ARTICLES_KEY,
      JSON.stringify(added.filter((article) => article.id !== id))
    );
  }
};
