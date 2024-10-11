import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { InstallationComponent } from './components/getting-started/installation/installation.component';
import { FirstProgramComponent } from './components/getting-started/first-program/first-program.component';
import { UsageComponent } from './components/getting-started/usage/usage.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { VariablesComponent } from './components/programming/variables/variables.component';
import { ControlStructuresComponent } from './components/programming/control-structures/control-structures.component';
import { FunctionsComponent } from './components/programming/functions/functions.component';
import { ListsComponent } from './components/programming/lists/lists.component';
import { ObjectsComponent } from './components/programming/objects/objects.component';
import { OperatorsComponent } from './components/programming/operators/operators.component';
import { CommonErrorMessagesComponent } from './components/common-error-messages/common-error-messages.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'getting-started', children: [
        { path: '', component: GettingStartedComponent },
        { path: 'installation', component: InstallationComponent },
        { path: 'usage', component: UsageComponent },
        { path: 'first-program', component: FirstProgramComponent }
    ]},
    { path: 'programming', children: [
        { path: '', component: ProgrammingComponent },
        { path: 'variables', component: VariablesComponent },
        { path: 'operators', component: OperatorsComponent },
        { path: 'control-structures', component: ControlStructuresComponent },
        { path: 'functions', component: FunctionsComponent },
        { path: 'lists', component: ListsComponent },
        { path: 'objects', component: ObjectsComponent }
    ]},
    { path: 'common-error-messages', component: CommonErrorMessagesComponent },
    { path: '**', redirectTo: '' }
];