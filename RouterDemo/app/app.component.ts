import {Component} from 'angular2/core';
// import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
// other simple way to use router dirctives
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';

@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/albums/:id', name: 'Album', component: AlbumComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [
        // RouterOutlet,   registate the directive and render the template
        // RouterLink      use ng directive to guide SPA behavior
        ROUTER_DIRECTIVES
    ] 
})
export class AppComponent {
}