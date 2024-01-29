export interface Post {
    _id: string;
    newsCategory: {
        _id: string;
        categoryName: string;
    };
    newsTitle: string;
    newsDescription: string;
    newsContent: string;
    newsImageUrl: string;
    createdAt: string;
    updatedAt: string;
}
