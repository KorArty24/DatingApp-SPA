import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListsComponent } from './member-lists/member-lists.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'members', component: MemberListsComponent},
        {path: 'messages', component: MessagesComponent},
        {path: 'lists', component: ListsComponent},
    ]
},
{path: '**', redirectTo: '', pathMatch: 'full'},
];
