import { tagsList } from '../const/tags';

export const getTagsList = () => tagsList.sort((a, b) => a.id - b.id);
