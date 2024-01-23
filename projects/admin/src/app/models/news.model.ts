import { CategoryModel } from './category.model';

export interface NewsModel {
    _id: string;
    newsCategory: CategoryModel;
    newsTitle: string;
    newsDescription?: string;
    newsContent: string;
    newsImageUrl: string;
    createdAt: string;
}
