import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigurationFormComponent } from '../../components/configuration-form/configuration-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
    selector: 'app-configuration-page',
    templateUrl: './configuration-page.component.html',
    styleUrls: ['./configuration-page.component.scss'],
    standalone: true,
    imports: [CommonModule, ConfigurationFormComponent, HeaderComponent]
})
export class ConfigurationPageComponent {}
