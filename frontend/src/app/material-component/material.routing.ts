import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ViewLocaleComponent } from '../Components/locales/view-locale/view-locale.component';
import { NewLocaleComponent } from '../Components/locales/new-locale/new-locale.component';
import { UpdateLocaleComponent } from '../Components/locales/update-locale/update-locale.component';
import { DeleteLocaleComponent } from '../Components/locales/delete-locale/delete-locale.component';
import { DetailLocaleComponent } from '../Components/locales/detail-locale/detail-locale.component';
import { ProfileComponent } from '../components/user-components/profile/profile.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'locales',
    component: ViewLocaleComponent
  },
  {
    path: 'locales/new',
    component: NewLocaleComponent,
  },
  {
    path: 'locales/update/:id',
    component: UpdateLocaleComponent,
  },
  {
    path: 'locales/delete/:id',
    component: DeleteLocaleComponent,
  },
  {
    path: 'locales/detail/:id',
    component: DetailLocaleComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];
