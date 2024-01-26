import { CategoryModel } from './category.model';

export interface NewsModel {
    _id: string;
    newsCategory: CategoryModel;
    newsTitle: string;
    newsDescription?: string;
    newsContent: HTMLElement;
    newsImageUrl: string;
    createdAt: string;
}
