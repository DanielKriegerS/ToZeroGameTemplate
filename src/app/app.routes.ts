import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', 
        loadComponent: () => 
            import('../component/main-content/main-content.component').then(
                (m) => m.MainContentComponent
            ) 
    },
    { path: '**', redirectTo: '' },
];
