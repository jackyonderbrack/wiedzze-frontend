import { Component, ViewChild } from '@angular/core';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss'],
    standalone: true,
    imports: [CategoryFormComponent, CategoryListComponent]
})
export class CategoryPageComponent {
    @ViewChild(CategoryListComponent)
    private categoryList?: CategoryListComponent;

    onCategoryAdded() {
        this.categoryList?.loadCategories();
    }
}
