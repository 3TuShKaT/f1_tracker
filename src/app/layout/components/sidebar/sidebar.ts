import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';

import {
  tablerLayoutDashboard,
  tablerCalendar,
  tablerTrophy,
  tablerHelmet,
  tablerUsersGroup,
  tablerRoute,
  tablerChartBar,
  tablerInfoCircle,
} from '@ng-icons/tabler-icons';

import { bootstrapFlag } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIcon],
  providers: [
    provideIcons({
      tablerLayoutDashboard,
      tablerCalendar,
      tablerTrophy,
      bootstrapFlag,
      tablerHelmet,
      tablerUsersGroup,
      tablerRoute,
      tablerChartBar,
      tablerInfoCircle,
    }),
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {}